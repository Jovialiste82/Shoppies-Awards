import React, { useState, useEffect } from 'react'
import { getTotalRevenue, getParsedRevenue } from '../utilities/helper.js'

const BoxOfficeTicker = ({nominees}) => {

  const [boxNominees, setBoxNominees] = useState([])
  const [tickerString, setTickerString] = useState('')

  useEffect(() => {
    const nomineesRevenues = nominees.map( async (nominee) => {

      const revenue = await getTotalRevenue(nominee)
      const parsedRevenue = await getParsedRevenue(nominee)
      // console.log('### checking revenue') : expecting String (ok)
      // console.log(revenue)

      return {
        title: nominee.Title,
        imdbID: nominee.imdbID,
        revenue,
        parsedRevenue,
      }
    })
  
    let resolvedNomineesRevenues = []

     nomineesRevenues.forEach( async (each) => {
        const tempVar = await each
        resolvedNomineesRevenues.push(tempVar)
      })

      console.log('### Checking resolvedNomineesRevenues : expecting [{}] (ok)')
      console.log(resolvedNomineesRevenues)

      // Mettre a jour mon state avec un Array d'objets
      setBoxNominees(resolvedNomineesRevenues) 
 
  }, [nominees])

  useEffect(() => {

    setTimeout(() => {
      const newTickerString = boxNominees.map( e => `${e.title} (${e.revenue})   `).join()
      console.log('### Checking newTickerString : expecting string')
      console.log(newTickerString)
      setTickerString(newTickerString)
    }, 300)
  }, [boxNominees])


  return (
    <div className='ticker-wrapper'>
      <div class='bigHeading'>Box Office</div>
      <div class='text-update'>
        <p>{tickerString}</p>
      </div>
    </div>
  )
}

export default BoxOfficeTicker
