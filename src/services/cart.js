import axios from "axios";



export const orderCart = async (data) => {
  try {
    await axios.post(
      `https://auth-182a4-default-rtdb.europe-west1.firebasedatabase.app/.json`,
      data
    );
  } catch (err) {
    alert(err);
  }
};
