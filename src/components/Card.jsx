import React from 'react'

function Card({src,name,usd}) {
  return (
    <div className='card'>
     <img src={src} alt="" />
     <p className='logoname'>{name}</p>
     <h1 className='usd'>{usd} USD</h1>
     
    </div>
  )
}

export default Card
//