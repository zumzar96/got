import axios from "axios";
import { userActions } from "../store/userSlice";
import { userSlice } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { store } from "../store";
import  "../firebase"
import { firebaseAuth } from "../firebase";

export const signup = (data) =>
  axios
    .post(
      firebaseAuth.signup,
      data
    )
    .then((res) => res.data);

export const login = async (data) => {
  try {
    const response = await axios.post(
      firebaseAuth.signin,
      data
    );
    console.log(response.data.idToken);
    const Ttoken = response.data.idToken;
    store.dispatch(userActions.login(Ttoken));
  } catch (err) {
    alert(err);
  }
};
