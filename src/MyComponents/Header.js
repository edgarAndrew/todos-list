import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="#">
          {props.title}
        </Link>
        <button
          className="navbar-toggler bg-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/todos-list">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>
          </ul>
          {props.searchBar ? <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>:""
          }
          
        </div>
      </div>
    </nav>
  )
}
Header.defaultProps = {
    title: "Your title here",
    searchBar: true
}
Header.propTypes = {
    title : PropTypes.string, // if title set to integer or other data type there will be warning in console
    searchBar: PropTypes.bool.isRequired
}