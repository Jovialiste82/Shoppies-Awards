import React from 'react'
import { Container, Col, Row, Button, Card } from 'react-bootstrap'


const MyNominees = (props) => {
  return (
    <div className='nomination-list'>
      <h4>
        My Nomination List
      </h4>
       {props.movies.map((movie, index) => (
              <Row>
                <Col>{`${movie.Title} (${movie.Year})`}</Col>
                <Col>
                  <Button variant="danger" onClick={() => props.handleRemoveClick(movie)}>
                    Remove
                  </Button>
                </Col>
              </Row>
        ))}
    </div>
  )
}

export default MyNominees
