import React from 'react'
import './css/style.css'

const CardComponent = ({name, phone}) => {
  return (
    <div className='card'>
        <h3>Full Name: {name}</h3>
        <p>Cell Number: {phone}</p>
    </div>
  )
}

export default CardComponent