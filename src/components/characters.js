import React from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getCharacter } from '../services/characters';


function Characters(props) {
    const { data: charName = [] } = useQuery("getCharacter", () => getCharacter());
   
    

    return (

     <div>{charName.name}</div>
    );
}

export default Characters;