import React from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getCharacter } from '../services/characters';
import CharacterContainer from './CharacterContainer'


function Characters(props) {
    const { data: charName = [] } = useQuery("getCharacter", () => getCharacter());
   
    

    return (

        <div>{charName.map((character) => (
            <CharacterContainer character={character} />))}</div>
    );
}

export default Characters;