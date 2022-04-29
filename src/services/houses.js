import axios from 'axios';

export const getHouse = () =>
  axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBwQWEjvdmXwjGKJXaq9ITbJGrkSUy-bc"
    ).then((res) => res.data)