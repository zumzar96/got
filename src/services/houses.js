import axios from 'axios';

export const getHouse = () =>
  new Promise(async (resolve, reject) => {
    try {
      const character = await axios.get("https://anapioficeandfire.com/api/characters/583");
      resolve(character.data);
    } catch (error) {
      reject(error);
    }
  });