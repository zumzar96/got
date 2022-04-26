import axios from 'axios';

export const getBook = () =>
  axios.get(
    "https://www.anapioficeandfire.com/api/books"
    ).then((res) => res.data)