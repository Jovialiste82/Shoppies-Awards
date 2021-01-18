

  const getMovie = async (movie) => {
    const imdbID = movie.imdbID
    // const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=MY_API_KEY`
    const url = `https://shoppiesawardsapibyphilippe.herokuapp.com/api/movie?movie=${imdbID}`
    const response = await fetch(url)
    const responseJson = await response.json()
    return responseJson
  }


  export const getTotalRevenue = async (movie) => {
    
    let movieResult = await getMovie(movie)
  
    // console.log('##### Inside getTotalRevenue function')
    // console.log(movieResult)
  
      if(movieResult.BoxOffice && movieResult.BoxOffice !== "N/A") {
        // console.log('### inside if statement 1')
        // console.log(movieResult.BoxOffice)
        const revenue = movieResult.BoxOffice

        return revenue
      }
  }


  
  export const getParsedRevenue = async (movie) => {

    const movieResult = await getMovie(movie)

    if(movieResult.BoxOffice && movieResult.BoxOffice !== "N/A") {
      const revenue = movieResult.BoxOffice.slice(1).replaceAll(",", "")
      // console.log('### inside if statement 2')
      // console.log(revenue)
      return revenue
    }
  }


