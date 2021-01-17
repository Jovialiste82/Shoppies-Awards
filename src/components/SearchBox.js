import React from 'react'

const SearchBox = (props) => {


  return (
    <div className='searchbox'>
      <input 
        className='form-control'
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
        placeholder='Type to search...'
      ></input>
    </div>
  )
}

export default SearchBox
