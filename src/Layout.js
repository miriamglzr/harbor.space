import React from 'react';
import {Link} from 'react-router-dom';
import harbor from './media/harbor.svg';

export default function Layout () {
  return (
    <nav className="navbar navbar-light d-flex justify-content-between bg">

      <Link className="navbar-brand" to="/">
        <img className="harbor-space" src={harbor} alt="harbor space logo" />
        /INTERACTIVE DESIGN
      </Link>

      <div className="float-end" id="navbarTogglerDemo02">

        <button className="apply-button">
          <p className="apply-format">APPLY</p>NOW
        </button>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
}
