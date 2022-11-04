import React from 'react'
import { Link } from 'react-router-dom'
function Back() {

  return (
    <div className='bk'>

    <Link to="save"><button className='hide'>VIEW SAVED DATA</button></Link> 
    
    </div>
  )
}

export default Back