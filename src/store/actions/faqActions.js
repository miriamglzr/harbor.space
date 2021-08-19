//import faq from '../../database/faq.json';
import {axiosConfig} from '../../utils/axiosConfig';

export const GET_FAQ_LOADING = 'GET_FAQ_LOADING';
export const GET_FAQ_SUCCESS = 'GET_FAQ_SUCCESS';
export const GET_FAQ_ERROR = 'GET_FAQ_ERROR';

export const CLEAR_FAQ = 'CLEAR_FAQ';

// =========================================
// --------------- GET FAQ -----------------
// =========================================

export const getFaq = () => async dispatch => {
  dispatch ({type: GET_FAQ_LOADING});
  try {
    let res = await axiosConfig.get (`faq`);
    console.log (res);
    console.log (res.data);
    await dispatch ({type: GET_FAQ_SUCCESS, payload: res.data});
  } catch (error) {
    dispatch ({type: GET_FAQ_ERROR});
    console.log (error);
    // await dispatch ({type: GET_FAQ_SUCCESS, payload: faq});
  }
};

// =========================================
// ------------- CLEAR FAQ -----------------
// =========================================

export const clearFaq = () => async dispatch => {
  await dispatch ({type: CLEAR_FAQ});
};
