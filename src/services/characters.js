import axios from 'axios';

export const getCharacter = () =>
  axios.get(
      "https://anapioficeandfire.com/api/characters/583"
    ).then((res) => res.data)