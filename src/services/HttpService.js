import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api"
});

class HttpService {
  get(url) {
    return http.get(url);
  }

  getID(url) {
    return http.get(url);
  }

  post(url, body) {
    return http.post(url, body);
  }

  edit(url, body) {
    return http.put(url, body);
  }

  delete(url) {
    return http.delete(url);
  }
}

export const httpService = new HttpService();
