import React from 'react';
import { useQuery } from 'react-query';
import { getBook } from '../services/books';



function Books(props) {
    const { data: bookName = [] } = useQuery("getBook", () => getBook());


    return (
     <div>{bookName.name}</div>
    );
}

export default Books;