import axios from 'axios';

export const getCharacter = () =>
  axios.get(
    "www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
    ).then((res) => res.data)