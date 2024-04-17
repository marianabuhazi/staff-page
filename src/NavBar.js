import React from 'react';
import "./css/NavBar.css";

const NavBar = ({darkMode, toggleDarkMode}) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark dark-bg-color`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.specpublishing.com/">
            <div className="logo-container">
              <img src="https://spectrum-logos.s3.amazonaws.com/spectator_logo_color.png" alt="" width="45" height="45"/>
              <span className="logo-name">Spectator</span>
            </div>
            <span className="logo-subname">publishing company</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Journalism
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#University">University News</a></li>
                  <li><a className="dropdown-item" href="#City">City News</a></li>
				  {/* <li><a className="dropdown-item" href="#Opinion">Opinion</a></li>
				  <li><a className="dropdown-item" href="#A&C">Arts & Culture</a></li> */}
                  <li><a className="dropdown-item" href="#Sports">Sports</a></li>
                  <li><a className="dropdown-item" href="#Eye">The Eye</a></li>
				  <li><a className="dropdown-item" href="#Spectrum">Spectrum</a></li>
				  {/* <li><a className="dropdown-item" href="#Copy">Copy</a></li> */}
				  <li><a className="dropdown-item" href="#Graphics">Graphics</a></li>
				  <li><a className="dropdown-item" href="#Photo">Photo</a></li>
				  {/* <li><a className="dropdown-item" href="#Illustrations">Illustrations</a></li> */}
				  <li><a className="dropdown-item" href="#Video">Video</a></li>
				  {/* <li><a className="dropdown-item" href="#Audio">Audio & Podcasting</a></li>
				  <li><a className="dropdown-item" href="#Layout">Layout</a></li> */}
				  <li><a className="dropdown-item" href="#Crosswords">Crosswords</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Business & Innovation
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#Engineering">Engineering</a></li>
                  {/* <li><a className="dropdown-item" href="#Revenue">Revenue</a></li>
                  <li><a className="dropdown-item" href="#Product">Product</a></li>
                  <li><a className="dropdown-item" href="#Engagement">Engagement</a></li> */}
                </ul>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch ms-2">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={toggleDarkMode} />
            <label className="form-check-label text-white" htmlFor="flexSwitchCheckDefault">{darkMode ? 'Light Mode' : 'Dark Mode'}</label>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

