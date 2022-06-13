import axios from "axios";

export const getProduct = (id) =>
  axios
    .get(
      `https://auth-182a4-default-rtdb.europe-west1.firebasedatabase.app/sviproizvodi/${id}.json`
    )
    .then((res) => res.data);

export const getLaptops = () =>
  axios
    .get(
      `https://auth-182a4-default-rtdb.europe-west1.firebasedatabase.app/proizvodi/laptops.json`
    )
    .then((res) => res.data);

export const getTablets = () =>
  axios
    .get(
      `https://auth-182a4-default-rtdb.europe-west1.firebasedatabase.app/proizvodi/tablets.json`
    )
    .then((res) => res.data);
