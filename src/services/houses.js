import axios from 'axios';

export const getHouse = () =>
  axios.get(
    'https://auth-182a4-default-rtdb.europe-west1.firebasedatabase.app/laptop.json'
    ).then((res) => res.data)