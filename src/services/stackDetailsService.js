import axios from 'axios';
import {API_URL} from '../config/ApiConfig';

export const getStackDetails = async (size, tag) => {
  try {
    const apiUrl = `${API_URL.BASE_URL}pagesize=${size}&order=desc&sort=hot&tagged=${tag}&site=stackoverflow`;
    const apiResponse = await axios.get(apiUrl);
    return apiResponse;
  } catch (e) {
    return e.message;
  }
};
