import React from 'react'

const Novel = props => {

  const novelCheck = (event) => {
    props.setSearchTerm(event.target.value)
  }

  return (

    <div className='App'>
      <h1>Great Novels</h1>
      <input type="text" name="search" onChange={novelCheck}/>
      {props.novelDataAsProps.map(novel => {
        return (
          <>
          <div>{novel.title} by {novel.author.nameFirst} {novel.author.nameLast}</div>
          </>
        )
      })}

    </div>
  )
}

export default Novel