import React, { Fragment } from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
import { getHouse } from '../services/houses';
import HouseContainer from './HouseContainer';



function Houses(props) {
    const { data : houseName = [], } = useQuery("getCharacter", () => getHouse());
    return (
    <div>
    <div>{houseName.map((house) => (
        <HouseContainer house={house} />))}</div>
     </div>
    );
}

export default Houses;