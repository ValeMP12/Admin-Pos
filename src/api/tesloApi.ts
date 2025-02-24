import axios from 'axios';

const tesloApi = axios.create({
  baseURL: import.meta.env.TESLO_API_URL,
  headers: {
    'Content-Type': 'application'
  },
});
console.log(import.meta.env);

export default tesloApi;


