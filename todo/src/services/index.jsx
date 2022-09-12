import axios from "axios";
export default axios.create({
  baseURL: "https://6311e8ff19eb631f9d7b7f94.mockapi.io",
  headers: {
    "Content-type": "application/json"
  }
});