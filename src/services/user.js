import axios from "axios";
import { userActions } from "../store/userSlice";
import { store } from "../store";

export const signup = (data) =>
  axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_AUTH_API_KEY}`,
      data
    )
    .then((res) => res.data);

export const login = async (data) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_AUTH_API_KEY}`,
      data
    );
    console.log(response.data.idToken);
    const Ttoken = response.data.idToken;
    store.dispatch(userActions.login(Ttoken));
  } catch (err) {
    alert(err);
  }
};
