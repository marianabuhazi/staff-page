import React, { useState } from 'react';
import "./css/Sections.css";
import UserOverlay from './UserOverlay';
import authors from "./backend/authors.json";
import { sections } from './data/Sections';

const placeholderImage = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"

const authorsBySection = {};
const authorsList = authors.q_results;
authorsList.forEach(author => {
    const section = author.beat;

    if (sections.some(sec => sec.name === section)) {
        if (!authorsBySection[section]) {
            authorsBySection[section] = [];
        }
        authorsBySection[section].push(author);
    }
});


const Sections = ({ darkMode, searchQuery }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseOverlay = () => {
    setSelectedUser(null);
  };

  const filteredAuthorsBySection = {};
  Object.keys(authorsBySection).forEach(sectionId => {
    filteredAuthorsBySection[sectionId] = authorsBySection[sectionId].filter(author => {
        const nameMatch = author.byline?.toLowerCase().includes(searchQuery?.toLowerCase());
        const roleMatch = author.role?.toLowerCase().includes(searchQuery?.toLowerCase());
        return nameMatch || roleMatch;
    });
  });

  return (
    <div>
      {searchQuery ? (
        <>
          {sections.map((section) => {
            const sectionId = section.name;
            const filteredSection = filteredAuthorsBySection[sectionId] || [];
            if (filteredSection.length > 0) {
              return (
                <div key={section.id} className="section">
                 <h2 className="sections-header" id={section.id}>{section.name} <span className="results">({filteredSection.length} result{filteredSection.length ===1 ? '' : 's'})</span></h2>
				 <p className='sections-about-us'>{section.aboutUs}</p>
                  <div className="row justify-content-center">
                    {filteredSection.map((author) => {
                      return (
                        <div className="col-md-3" key={author._id}>
                          <div className="custom-card" onClick={() => handleUserClick(author)}>
                            <img alt={`${author.byline} headshot`}  src={author.image === "" ? placeholderImage : author.image} className="card-img-top rounded-circle"/>
                            <div className="card-body">
                              <h3 className="card-title">{author.byline}</h3>
                              <h4 className="card-role">{author.role ? author.role : "Member"}</h4>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </>
      ) : (
        <>
          {sections.map((section) => {
            const sectionAuthors = authorsBySection[section.name] || [];
            return (
              <div key={section.id} className="section">
                <h2 className="sections-header" id={section.id}>{section.name} <span className="results">({sectionAuthors.length} result{sectionAuthors.length === 1 ? '' : 's'})</span></h2>
                <p className='sections-about-us'>{section.aboutUs}</p>
				<div className="row justify-content-center">
                  {sectionAuthors.map((author) => {
                    return (
                      <div className="col-md-3" key={author._id}>
                        <div className="custom-card" onClick={() => handleUserClick(author)}>
                          <img alt={`${author.byline} headshot`} src={author.image === "" ? placeholderImage : author.image} className="card-img-top rounded-circle" />
                          <div className="card-body">
                            <h3 className="card-title">{author.byline}</h3>
                            <h4 className="card-role">{author.role ? author.role : "Member"}</h4>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      )}
      {selectedUser && <UserOverlay user={selectedUser} onClose={handleCloseOverlay}/>}
    </div>
  );
}

export default Sections;
