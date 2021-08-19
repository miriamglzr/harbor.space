import axios from 'axios';

// local database json file
import faq from '../database/faq.json';
//const baseUrl = 'http://localhost:5000/';

// Use axiosMgr.post (or .get .put .delete) to make post calls shorter outside this file
// ========================================================================================
export const axiosConfig = {
  get: async function () {
    const config = {headers: {'Content-type': 'application/json'}};
    console.log (faq);
    return await axios.get (/*baseUrl +*/ faq, config);
  },
};
