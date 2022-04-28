import axios from "axios";

export const signup = (data) =>
  axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBwQWEjvdmXwjGKJXaq9ITbJGrkSUy-bc",data
    ).then((res) => res.data)