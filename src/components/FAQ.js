import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getFaq} from '../store/actions/faqActions';

function FAQ (props) {
  let {getFaq, faq} = props;
  const [option, setOption] = useState ('Program conditions');
  const [optionArr, setOptionArr] = useState ([]);
  // const [show1, setShow1] = useState (false);
  // const [show2, setShow2] = useState (false);
  // const [show3, setShow3] = useState (false);
  // const [show4, setShow4] = useState (false);

  const handleCollapse = (option, i) => {
    var coll = document.getElementById (option);
    // getFaq ();
    // console.log (faq);
    coll.style.display === 'block'
      ? (coll.style.display = 'none')
      : (coll.style.display = 'block');

    console.log (coll.style.display);
    // if (i === '0') {
    //   setShow1 (!show1);
    // } else if (i === '1') {
    //   setShow2 (!show2);
    // } else if (i === '2') {
    //   setShow3 (!show3);
    // } else {
    //   setShow4 (!show4);
    // }
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
              {/* {
              faq.map (e => {
                if (!optionArr.includes (e.category)){
                setOptionArr({...optionArr, e.category})}
                optionArr.map ((category, i) => {
                  return (
                    <a onClick={() => setOption (category)} key={i}>
                      {category}
                    </a>
                  );
                })
              })} */}
              <a onClick={() => setOption ('Program conditions')}>
                Program conditions
              </a>
              <a onClick={() => setOption ('Option 2')}>Option 2</a>
              <a onClick={() => setOption ('Option 3')}>Option 3</a>
            </div>
          </div>
        </div>
      </div>
      {faq &&
        <div className="col ">
          {faq.map ((e, i) => {
            let show = false;
            if (e.option === 'pc') {
              return (
                <div key={i}>
                  <div className="row faq border-top">
                    <div className="col">
                      <p className="subtitle">{e.category}</p>
                    </div>
                    <div className="col">
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
                          ? <i class="fas fa-minus-circle" />
                          : <i class="fas fa-plus-circle" />}
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
