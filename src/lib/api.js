import axios from "axios";
const api = axios.create({ baseURL: "http://3.39.21.137:8080"});

export const baseURL = api;