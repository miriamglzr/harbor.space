import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getFaq} from '../store/actions/faqActions';

function FAQ (props) {
  let {getFaq, faq} = props;
  const [option, setOption] = useState ('Program conditions');
  const [show1, setShow1] = useState (false);
  const [show2, setShow2] = useState (false);
  const [show3, setShow3] = useState (false);
  const [show4, setShow4] = useState (false);

  const handleCollapse = (option, i) => {
    var coll = document.getElementById (option);
    getFaq ();
    console.log (faq);
    coll.style.display === 'block'
      ? (coll.style.display = 'none')
      : (coll.style.display = 'block');
    if (i === '0') {
      setShow1 (!show1);
    } else if (i === '1') {
      setShow2 (!show2);
    } else if (i === '2') {
      setShow3 (!show3);
    } else {
      setShow4 (!show4);
    }
  };

  useEffect (() => {
    getFaq ();
  }, []);

  return (
    <div className="container faq-p">
      <div className="row">
        <div className="col-4">
          <h1 className="title-font">
            Frequently asked questions
          </h1>
        </div>
        <div className="col-5 d-flex justify-content-end mt-3">
          <p className="text-font ">
            Filter by:
          </p>
        </div>
        <div className="col-3">
          <div class="dropdown">
            <button class="dropbtn">
              <div className="row">
                <div className="col-9">{option}</div>
                <div className="col-1">
                  <i class="fas fa-chevron-down icon" />
                </div>
              </div>
            </button>
            <div class="dropdown-content">
              <a onClick={() => setOption ('Program conditions')}>
                Program conditions
              </a>
              <a onClick={() => setOption ('Option 2')}>Option 2</a>
              <a onClick={() => setOption ('Option 3')}>Option 3</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col ">

        <div className="row faq border-top">
          <div className="col">
            <p className="subtitle">Program conditions</p>
          </div>
          <div className="col">
            <p>What are my obligations?</p>
          </div>
          <div className="col">
            <button
              type="button"
              className="collapsible"
              onClick={() => handleCollapse ('key1', '0')}
            >
              {show1
                ? <i class="fas fa-minus-circle" />
                : <i class="fas fa-plus-circle" />}
            </button>
          </div>
        </div>
        <div className="content container w-50" id="key1">
          <p>

            The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes.
            Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand. Together we insure students get the best knowledge about the current job market opportunities.
            We offer our students paid internships options during studies jointly with our industrial partners.
            Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process.

          </p>
        </div>

        <div className="row faq border-top">
          <div className="col">
            <p className="subtitle">Program conditions</p>
          </div>
          <div className="col">
            <p>Do I get a job placement upon graduation?</p>
          </div>
          <div className="col">
            <button
              type="button"
              className="collapsible"
              onClick={() => handleCollapse ('key2', '1')}
            >

              {show2
                ? <i class="fas fa-minus-circle" />
                : <i class="fas fa-plus-circle" />}
            </button>
          </div>
        </div>
        <div className="content container w-50 " id="key2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="row faq border-top">
          <div className="col">
            <p className="subtitle">Program conditions</p>
          </div>
          <div className="col">
            <p>What if I want to start my own company? </p>
          </div>
          <div className="col">
            <button
              type="button"
              className="collapsible"
              onClick={() => handleCollapse ('key3', '2')}
            >
              {show3
                ? <i class="fas fa-minus-circle" />
                : <i class="fas fa-plus-circle" />}
            </button>
          </div>
        </div>
        <div className="content container w-50" id="key3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="row faq border-top">
          <div className="col">
            <p className="subtitle">Program conditions</p>
          </div>
          <div className="col">
            <p>Do I need a visa?</p>
          </div>
          <div className="col">
            <button
              type="button"
              className="collapsible"
              onClick={() => handleCollapse ('key4', '3')}
            >
              {show4
                ? <i class="fas fa-minus-circle" />
                : <i class="fas fa-plus-circle" />}
            </button>
          </div>
        </div>
        <div className="content container w-50" id="key4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  faq: state.faq.faq,
  isLoading: state.faq.isLoading,
});

export default connect (mapStateToProps, {getFaq}) (FAQ);
