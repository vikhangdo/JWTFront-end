import axios from "axios";

const registerUser = (email, username, phone, password) => {
  return axios.post("http://localhost:8080/api/v1/register", {
    email,
    username,
    phone,
    password,
  });
};

const loginUser = (valueLogin, password) => {
  return axios.post("http://localhost:8080/api/v1/login", {
    valueLogin,
    password,
  });
};

const fetchAllUser = () => {
  return axios.get("http://localhost:8080/api/v1/users/show");
};
export { registerUser, loginUser, fetchAllUser };
