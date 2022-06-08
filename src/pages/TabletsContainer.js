import React from "react";
import Crd from "../components/Card.js";
import Product from "./Product.js";
import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";


const TabletsContainer = (props) => {
const [id, setId] = useState('')
const [image, setImage] = useState('')
const navigate = useNavigate()
const Onclickhandler = () => {
  navigate("/product", { state: { id: props.id, src: props.image } })
}

  return (<Fragment><Crd src={props.imagee} id={props.id} onClick={Onclickhandler}/>
  </Fragment>);
};

export default TabletsContainer;
