import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getFaq} from '../store/actions/faqActions';

function FAQ (props) {
  let {getFaq, faq} = props;
  const [option, setOption] = useState ('Program conditions');
  const [optionArr, setOptionArr] = useState ([
    'Program conditions',
    'Admissions',
    'Harbor.Space',
    'SCG',
    'Living in Barcelona',
  ]);

  const handleCollapse = (option, i) => {
    var coll = document.getElementById (option);
    coll.style.display === 'block'
      ? (coll.style.display = 'none')
      : (coll.style.display = 'block');
  };

  const handleOptions = async () => {
    await getFaq ();
    let arr = [];
    faq.forEach (e => {
      if (!arr.includes (e.category)) {
        arr.push (e.category);
      }
    });
    //   setOptionArr (arr);
  };

  useEffect (() => {
    handleOptions ();
  }, []);

  return (
    faq.length &&
    <div className="container faq-p ">
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
          <div className="dropdown">
            <button className="dropbtn">
              <div className="row">
                <div className="col-9">{option}</div>
                <div className="col-1">
                  <i className="fas fa-chevron-down icon" />
                </div>
              </div>
            </button>
            <div className="dropdown-content">
              {optionArr &&
                optionArr.map ((category, i) => {
                  return (
                    <a onClick={() => setOption (category)} key={i}>
                      {category}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      {faq &&
        <div className="col mb-4">
          {faq.map ((e, i) => {
            if (e.category === option) {
              return (
                <div key={i}>
                  <div className="row faq border-top">
                    <div className="col">
                      <p className="subtitle faq-text">{e.category}</p>
                    </div>
                    <div className="col faq-text">
                      <p>{e.question}</p>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="collapsible"
                        onClick={() => handleCollapse (`key${i}`, {i})}
                      >
                        {document.getElementById (`key${i}`) &&
                          document.getElementById (`key${i}`).style.display ===
                            'none'
                          ? <i className="fas fa-minus-circle" />
                          : <i className="fas fa-plus-circle" />}
                      </button>
                    </div>
                  </div>
                  <div className="content container w-50" id={`key${i}`}>
                    <p>
                      {e.answer}
                    </p>
                  </div>
                </div>
              );
            }
          })}

        </div>}
    </div>
  );
}

const mapStateToProps = state => ({
  faq: state.faq.faq,
  isLoading: state.faq.isLoading,
});

export default connect (mapStateToProps, {getFaq}) (FAQ);
