import React from 'react';
import { 
    Button ,
    Container,
    Row,
    Col,} from 'react-bootstrap';
import { useNavigate, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
const error=useRouteError();
const navigate=useNavigate();
  return (
    <Container>
    <Row>
      <Col xs={{ span: 8, offset: 2 }}> 
      <div className='mt-5 text-center'>
      <h1>oopps!!!!</h1>
      <p>Sorry, This is  make error in this page !</p>
      <p>
      <i>{error.statusText || error.message}</i>
      </p>
      <Button variant='link' onClick={() => navigate("/", {replace: true})}>link</Button>
    </div>
      </Col>
    </Row>
  </Container>
   
  )
}

export default ErrorPage
