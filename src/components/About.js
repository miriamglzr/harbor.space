import React from 'react';
import student from '../media/student.svg';
import circleQuad from '../media/circle-quad.svg';
import graduation from '../media/graduation.svg';

export default function About () {
  return (
    <div className="container">
      <div className="container">
        <div className="col">
          <img className="student-bg" src={circleQuad} alt="background" />
          <img className="student-img" src={student} alt="student image" />
        </div>
        <div className="col">
          <h1 className="title-font t2">
            About the apprenticeship
          </h1>
          <p className="normal-text p13">
            Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.
          </p>
        </div>
      </div>
      <div className="container w-80">
        <div className="col-4 about-p">
          <div className="box3">
            <p className="subtitle mb-1">Scholarship value</p>
            <p className="normal-text tuition">
              €31,300
            </p>
            <p className="normal-text">
              <p className="subtitle">Tuition covered</p>€20,900
            </p>
            <p className="normal-text">
              <p className="subtitle">Remaining</p>€2,000
            </p>
            <p className="normal-text">
              <p className="subtitle">Living stipend</p>€8,400 (€700/month)
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="box4">
            <p className="normal-text">
              <p className="subtitle mb-1">Study commitment</p>3 hours / day
            </p>
            <p>
              You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="box5">
            <p className="normal-text">
              <p className="subtitle mb-1">Work commitment</p>4 hours / day
            </p>
            <p>
              Immerse yourself in the professional world during your apprenticeship. You’ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.
            </p>
          </div>
        </div>
        <img className="graduation" src={graduation} alt="graduation" />
        <div className="box6">
          <p>
            <p className="subtitle mb-1">A full-time contract</p>
            1 Year / Full-Time
          </p>
          <p>
            You’ll be guaranteed a 1 year contract with SCG upon graduation.
          </p>
        </div>
      </div>
    </div>
  );
}
