import React, { useState } from "react";
import NavBar from "./NavBar";
import Sections from "./Sections";
import "./css/StaffPage.css";
import Footer from "./Footer";

function StaffPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <h1 className="header">Staff Directory</h1>
      <div className="header-container">
        <p className="summary">
          Our staff is composed of Columbia’s best reporters, software
          developers, writers, photographers, editors, graphic designers, data
          analysts, and more. Working for Spectator are students from all of
          Columbia's undergraduate schools—General Studies, Barnard College,
          School of Engineering and Applied Science, and Columbia
          College—hailing from a diverse spectrum of backgrounds and
          experiences.
        </p>
        <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search for staff by name or role"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="btn btn-outline-*" type="submit">
            Search
          </button>
        </form>
      </div>
      <Sections darkMode={darkMode} searchQuery={searchQuery} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default StaffPage;
