import React from 'react'
import Card from './Card'

function Mid() {
 let data =[{
  id:"1",
  src:"GOOGL.png",
  name:"googl",
  usd:"1515"
 },
{
 id:"2",
 src:"FB.png",
 name:"fb",
 usd:"266"
},
{
 id:"3",
 src:"am.jpg",
 name:"amzn",
 usd:"3116"
}]
  return (
    <div className='Mid'> 
    {
     data.map((list)=>(
      <Card src={list.src} name={list.name} usd={list.usd}/>
     ))
    }
  
    </div>
  )
}

export default Mid