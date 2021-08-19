import React from 'react';
import testimonyBg from '../media/testimony-bg.svg';

import avatar from '../media/avatar.svg';

export default function Testimony () {
  //  let reactSwipeEl;
  return (
    <div className="container">

      <img className="testimony-bg" src={testimonyBg} alt="background" />

      <div className="box7 container" id="testimony-card">
        <div className="row">
          <div className="col-2 mr-0">
            <img className="avatar-img" src={avatar} alt="student avatar" />
          </div>
          <div className="col-9 ml-0">
            <p className="testimony-name">Irene Pereyra</p>
            <p className="testimony-program">Interaction Design Fellow ‘19</p>
          </div>
          <div className="col-1 linkedin-icon">
            <i className="fab fa-linkedin-in" />
          </div>
        </div>
        <div className="row mt-4">
          <p className="testimony-text">
            This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.
          </p>
          <p className="testimony-major">
            Education    ·     B.A. Visual Design
          </p>
        </div>
      </div>

    </div>
  );
}
