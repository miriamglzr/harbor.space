import {combineReducers} from 'redux';
import faqReducer from './faqReducer';

const rootReducer = combineReducers ({
  faq: faqReducer,
});

export default rootReducer;
