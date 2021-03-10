import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1/'
});