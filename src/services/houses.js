import axios from 'axios';

export const getHouse = () =>
  new Promise(async (resolve, reject) => {
    try {
      const character = await axios.get("https://swapi.py4e.com/api/people/");
      resolve(character.data);
    } catch (error) {
      reject(error);
    }
  });