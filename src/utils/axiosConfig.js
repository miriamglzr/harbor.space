import axios from 'axios';

// local database json file
import faq from '../database/faq.json';
//const baseUrl = 'http://localhost:5000/';

// Use axiosMgr.post (or .get .put .delete) to make post calls shorter outside this file
// ========================================================================================
export const axiosConfig = {
  get: async function () {
    console.log (faq);
    //for api call for database
    //const config = {headers: {'Content-type': 'application/json'}};
    //return await axios.get (/*baseUrl +*/, config);
    return await faq;
  },
};
