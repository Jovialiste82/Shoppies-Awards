import React from 'react'
import { Container, Col, Row, Button, Card } from 'react-bootstrap'

const SearchResults = (props) => {
  return (
      <div className="search-results-container">
        <h2>Results</h2>
        <div className='search-results'>
          {props.movies.map((movie, index) => (
              <Row>
                <Col>{`${movie.Title} (${movie.Year})`}</Col>
                <Col>
                  <Button onClick={() => props.handleNominationClick(movie)}>
                    Nominate
                  </Button>
                </Col>
              </Row>
            ))}
        </div>
      </div>
  )
}

export default SearchResults
// style={{ margin: '1rem', width: '200px' }}
              // <Card >
              //   <Card.Body>
              //     <Card.Title>{movie.Title}</Card.Title>
              //     <Card.Text>{movie.Year}</Card.Text>
              //     <Button variant="primary">Nominate</Button>
              //   </Card.Body>
              // </Card>
