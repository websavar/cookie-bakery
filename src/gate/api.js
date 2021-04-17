import axios from "axios";

import { apiUrl } from "../helpers/configs.js";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZXNzYWdlIjoiSldUIFJ1bGVzISIsImlhdCI6MTQ1OTQ0ODExOSwiZXhwIjoxNDU5NDU0NTE5fQ.-yIVBD5b73C75osbmwwshQNRC7frWUYrqaTjTpza2y4'
const headers = { 'Authorization': token }

export const orderApi = axios.create({ baseURL: apiUrl, headers: headers });

export default orderApi;
