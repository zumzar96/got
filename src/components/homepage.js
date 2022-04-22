import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {Accordion, Button, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useQuery} from 'react-query';
import axios from 'axios';


function Homepage(props) {
    const navigate = useNavigate();
    const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios.get(
      "https://anapioficeandfire.com/api/characters/583"
    ).then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  
    return (
        <div>
            
            
            <div>{data.name}</div>
            <div> <Button type="submit" onClick={() => navigate('/favorites')}>Modal</Button></div>
            <div> <Button type="submit" onClick={() => navigate('/books')}>books</Button></div>
            <div> <Button type="submit" onClick={() => navigate('/characters')}>characters</Button></div>
            <div> <Button type="submit" onClick={() => navigate('/houses')}>houses</Button></div>



            
       </div> 
    );
}

export default Homepage;