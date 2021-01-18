import React from 'react'
import { Container, Col, Row, Button, Card } from 'react-bootstrap'


const MyNominees = (props) => {
  return (
    <div className='nomination-list'>
      <div className="results-title">
        <h4>My Nomination List</h4>
      </div>
      <Container>
       {props.movies.map((movie, index) => (
              <Row className="mb-2">
                <Col className="ml-3">{`${movie.Title} (${movie.Year})`}</Col>
                <Col >
                  <Button variant="danger" onClick={() => props.handleRemoveClick(movie)}>
                    Remove
                  </Button>
                </Col>
              </Row>
        ))}
      </Container>
    </div>
  )
}

export default MyNominees
