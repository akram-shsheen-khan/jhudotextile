import { getLocalStorege, getToken } from "../utils/globalFunctions";
import Axios from "axios";

// export const base_url = "https://env-backend.herokuapp.com";
// export const base_url = "https://trackingbackend.herokuapp.com";
// export const base_url = "http://192.168.100.252:5000";
// export const base_url = "http://192.168.0.105:8800";
export const base_url = "http://localhost:3000/api";

export const publicAPI = Axios.create({ baseURL: base_url });


const jwt = getToken()
const added_data_axios = {
}
export const privateAPI = Axios.create({
  baseURL: base_url,
  transformRequest: [
    (body = {}) => {
      return {  ...added_data_axios,...body } 
    },
    ...Axios.defaults.transformRequest,
  ],
  headers: { common: { Authorization: `Bearer ${jwt}` } },
})

export const attachToken = async () => {
  const jwt = getLocalStorege("token");
  privateAPI.defaults.headers.common.Authorization = `Bearer ${jwt}`;
  // console.log("Token Attached");
};
