import React from 'react';
const placeholderImage = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"

const UserOverlay = ({ user, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <span className="close" onClick={onClose}>×</span>
        <img src={user.image === "" ? placeholderImage : user.image} alt={user.name} className="overlay-image" />
        <h2>{user.byline}</h2>
        <h3>{user.role}</h3>
        <p className="bio" dangerouslySetInnerHTML={{ __html: user.bio }}></p>
      </div>
    </div>
  );
}

export default UserOverlay;