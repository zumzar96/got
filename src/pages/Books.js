import React from 'react';
import { useQuery } from 'react-query';
import { getBook } from '../services/books';
import  BookContainer from './SearchProduct'
import {Container, Row, Col} from 'react-bootstrap'



function Books(props) {
    const { data: bookName = [] } = useQuery("getBook", () => getBook());


    return (
     <Container><Row>{bookName.map((book) => (
        <Col><BookContainer book={book}/></Col>))}</Row></Container>
    );
};

export default Books;