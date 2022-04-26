import React from 'react';
import { useQuery } from 'react-query';
import { getBook } from '../services/books';
import  BookContainer from './BookContainer'



function Books(props) {
    const { data: bookName = [] } = useQuery("getBook", () => getBook());


    return (
     <div>{bookName.map((book) => (
        <BookContainer book={book} />))}</div>
    );
};

export default Books;