import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MY_OMDB_API_KEY from './apikey'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import SearchResults from './components/SearchResults';
import MyNominees from './components/MyNominees';
import Footer from './components/Footer';

function App() {

  const [movies, setMovies] = useState([])
  const [nominees, setNominees] = useState([])
  const [searchValue, setSearchValue] = useState([])


  // const MY_KEY = 'HIDDEN_IN_NETLIFY_CONFIG'
  // const MY_KEY = '9a0397d9'
  const MY_KEY = MY_OMDB_API_KEY


  const getMovieRequest = async (searchValue) => {
   
    const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=${MY_KEY}`
    const response = await fetch(url)
    const responseJson = await response.json()
    if(responseJson.Search) {
      // console.log(responseJson.Search)
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
    console.log(movies)
  }, [searchValue])


  useEffect(() => {
    const savedNominees = JSON.parse(localStorage.getItem('shoppies-nominees'))
    if(savedNominees !== null) {
      setNominees(savedNominees)
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
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
          <Row>
            <Col>
              <SearchResults 
                movies={movies} 
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
        <Footer />
    </div>
  );
}

export default App;


// <Header />
//   <SearchBox />
// <Main />
//   <SearchResults />
//   <NominationPanel />
// <BoxOfficeTicker />
// <Footer />
