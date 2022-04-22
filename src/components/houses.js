import React, { Fragment } from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
import { getHouse } from '../services/houses';



function Houses(props) {
    const { data : houseName = [], } = useQuery("getCharacter", () => getHouse());
    return (
    <div>
    <div>
         {houseName.name}          
     </div>
     </div>
    );
}

export default Houses;