import React from 'react'
import { Link } from 'react-router-dom'
function View({show,setshow}) {


  return (
    
    <div className='last'>

<div className="table-head">
        <span className='view'>view page</span>
      </div>
      <div className="table-body">
        
      <div className="table-row" >
      <span>141 Capital Inc</span>
          <span className="symbol">oncp</span>
          <span className="supply">1000</span>
           <span><button  className="bt b" >DELETE</button></span>
           <span className='x'>
           $0.001 <br />
USD
          </span>
              
         
        </div>

        <div className="table-row" >
      <span>BigString Corp</span>
          <span className="symbol">BSGC</span>
          <span className="supply">1000</span>
           <span><button  className="bt b" >DELETE</button></span>
           <span className='x'>
           $0.001 <br />
USD
          </span>
              
         
        </div>
      </div>

      <div className="foot">
      <Link to="/"><button className='back'> Back</button></Link> 
      </div>

    </div>
   
    
  )
}

export default View