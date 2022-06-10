import React from "react";
import Crd from "../components/Card.js";
import { useNavigate } from "react-router-dom";

const LaptopsContainer = (props) => {
  const navigate = useNavigate();
  const Onclickhandler = () => {
    navigate("/product", { state: { id: props.id } });
  };
  return <Crd style={{width:'13rem'}} src={props.imagee} id={props.id} onClick={Onclickhandler} />;
};

export default LaptopsContainer;
