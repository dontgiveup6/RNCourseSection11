import axios from 'axios';

const API_KEY = 'AIzaSyDgilforvWsXTL45JM_zdLCtjzEanofjgc';

function createUser() {
  axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDgilforvWsXTL45JM_zdLCtjzEanofjgc'
  );
}
