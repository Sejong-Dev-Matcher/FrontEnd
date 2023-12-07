import axios from "axios";

const client = axios.create();

// API 주소를 다른 곳으로 사용함
client.defaults.baseURL = "http://3.39.21.137:8080";

// 헤더 설정
// client.defaults.headers.common["Authorization"] = "Bearer a1b2c3d4";
client.defaults.headers.common["Content-Type"] = "application/json";

// 인터셉터 설정
client.interceptors.response.use(
  (response) => {
    // 요청 성공 시 특정 작업 수행
    return response;
  },
  (error) => {
    // 요청 실패 시 특정 작업 수행
    return Promise.reject(error);
  }
);

export default client;
