import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'; // Commented out routing import

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="/">{props.title}</a> {/* Changed Link to anchor */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" href="/">Home</a> {/* Changed Link to anchor */}
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
              <a className="nav-link" href="/about">{props.aboutText}</a> {/* Changed Link to anchor */}
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.Languages}
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">English</a></li>
                <li><a className="dropdown-item" href="/">Hindi</a></li>
                <li><a className="dropdown-item" href="/">Kannada</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Other Languages</a></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex" role="search" style={{ marginRight: '10px' }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>

          {/* Dark Mode Toggle */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault1" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">Dark Mode</label>
          </div>

          {/* Green Dark Mode Toggle */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" role="switch" id="flexSwitchCheckDefault2" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">Green Dark Mode</label>
          </div>

          {/* Blue Dark Mode Toggle */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" id="flexSwitchCheckDefault3" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault3">Blue Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// PropTypes for type-checking props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  Languages: PropTypes.string.isRequired,  // Add this to PropTypes
  toggleMode: PropTypes.func.isRequired,
  toggleMode1: PropTypes.func.isRequired,
  toggleMode2: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

// Default props in case no props are provided
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here',
  Languages: 'Languages',
};
