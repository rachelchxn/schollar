import React from 'react'

const WordCard = (props) => {
  return (
    <div className='word-card'>
      <div>
      <h3>{props.word}</h3>
      <p>{props.definition}</p>
      {props.link && <p><span><a href={props.link} target='_blank'>Learn More</a></span></p>}
      </div>
    </div>
  )
}

export default WordCard