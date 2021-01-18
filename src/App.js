import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header'
import MaxNomineesBanner from './components/MaxNomineesBanner'
import SearchBox from './components/SearchBox'
import SearchResults from './components/SearchResults';
import MyNominees from './components/MyNominees';
import Footer from './components/Footer';

function App() {

  const [movies, setMovies] = useState([])
  const [nominees, setNominees] = useState([])
  const [searchValue, setSearchValue] = useState([])


  const getMovieRequest = async (searchValue) => {
   
    const url = `https://shoppiesawardsapibyphilippe.herokuapp.com/api/search?search=${searchValue}`
    // console.log(url)
    const response = await fetch(url)
    const responseJson = await response.json()
    if(responseJson.Search) {
      // console.log(responseJson.Search)
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
    // console.log(movies)
  }, [searchValue])


  useEffect(() => {
    const savedNominees = JSON.parse(localStorage.getItem('shoppies-nominees'))
    if(savedNominees !== null) {
      setNominees(savedNominees)
      console.log(nominees)
    }
  }, [])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('shoppies-nominees', JSON.stringify(items))
  }

  const nominateMovie = (movie) => {
    const newNomineesList = [...nominees, movie]
    setNominees(newNomineesList)
    saveToLocalStorage(newNomineesList)
  }

  const removeNomineeMovie = (movie) => {
    const newNomineesList = nominees.filter((nominee) => nominee.imdbID !== movie.imdbID)
    setNominees(newNomineesList)
    saveToLocalStorage(newNomineesList)
  }


  return (
    <div className='app-flex'>
        <Header />
        <main>
          <Container>
          {nominees.length === 5 
          ? (<MaxNomineesBanner />)
          : (<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />)}        
          <Row>
            <Col>
              <SearchResults 
                movies={movies} 
                nominees={nominees}
                handleNominationClick={nominateMovie}
              />
            </Col>
            <Col>
              <MyNominees
                movies={nominees} 
                handleRemoveClick={removeNomineeMovie} 
              />
            </Col>
          </Row>
          </Container>
        </main>
        <Footer nominees={nominees} />
    </div>
  );
}

export default App;
