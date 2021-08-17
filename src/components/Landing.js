import React from 'react';
import designLogo from '../media/design-logo.svg';
import zeptolab from '../media/zeptolab.svg';
import quad from '../media/quad.svg';

export default function Landing () {
  return (
    <div className="container font">
      <div className="col">
        <h1 className="title-font t1">
          Interaction Design Apprenticeship
        </h1>
        <img className="design-logo" src={designLogo} alt="design logo" />
        <p className="bold-text p1">
          A fully funded work-study program to launch your tech career
        </p>
        <p className="normal-text p2">
          Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship.
        </p>
        <p className="normal-text p3">
          <strong>Position: </strong> Marketing Performance
        </p>
        <button className="button-format p4">Apply Now</button>
      </div>
      <div className="col">
        <img className="zeptolab-logo" src={zeptolab} alt="zeptolab logo" />
        <p className="normal-text p5">Powered by:</p>
        <p className="p6">Zeptolab</p>
        <img className="quad" src={quad} alt="background-pattern" />
        <div className="box1">
          <p className="subtitle p7">Application closes in:</p>
          <p className="p8">6 Day : 22 Hrs : 56 Min : 13 Seg</p>
        </div>
        <div className="box2">
          <p className="p9">
            <p className="subtitle">Location</p>
            Bangkok
          </p>
          <p className="p10">
            <p className="subtitle">Duration</p>
            1 year
            <p>Full time</p>
          </p>

          <p className="p11">
            <p className="subtitle">Start Date</p>30 June 2020
          </p>

          <p className="p12">
            <p className="subtitle">End Date</p>3 Aug 2021
          </p>
        </div>
      </div>
    </div>
  );
}
