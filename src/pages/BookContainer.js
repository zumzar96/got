import React from "react";
import {Container, Row, Col} from 'react-bootstrap'


const BookContainer = ({ book }) => {
    
  
    return (
      
        <div>{book.name}</div>
  

    );
  };
  
  export default BookContainer;