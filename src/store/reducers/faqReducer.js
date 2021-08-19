import {
  GET_FAQ_LOADING,
  GET_FAQ_SUCCESS,
  GET_FAQ_ERROR,
  CLEAR_FAQ,
} from '../actions/faqActions';

const initialState = {
  faq: [],
  isLoading: false,
};

export const faqReducer = function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_FAQ_LOADING: {
      return {...state, isLoading: true};
    }

    case GET_FAQ_ERROR: {
      return {...state, isLoading: false};
    }

    case GET_FAQ_SUCCESS: {
      return {
        ...state,
        faq: payload,
        isLoading: false,
      };
    }
    case CLEAR_FAQ: {
      return {...initialState};
    }
    default: {
      return state;
    }
  }
};

export default faqReducer;
