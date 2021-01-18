import React from 'react'
import { Container, Col, Row, Button, Card } from 'react-bootstrap'

const SearchResults = (props) => {
  return (
      <div className="search-results-container">
        <div className='results-title'>
          <h4>Results</h4>
        </div>
        <div className='search-results'>
          {props.movies.map((movie, index) => (
              <Row className="mb-2">
                <Col className="ml-3">{`${movie.Title} (${movie.Year})`}</Col>
                <Col>           
                  {props.nominees.length === 5 
                   ? (<Button variant="warning">Disabled</Button>) 
                   : props.nominees.find(m => m.imdbID === movie.imdbID)
                   ? (<Button variant="success">Added</Button>) 
                   : (<Button onClick={() => props.handleNominationClick(movie)}>Nominate</Button>)}
                </Col>
              </Row>
            ))}
        </div>
      </div>
  )
}

export default SearchResults

