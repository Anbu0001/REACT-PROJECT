import React from 'react'
import "./index.css"
import { useState,useEffect } from 'react'
import Display from './Display'


const App = () => {
  const data = new Date();
  //data call
 const days = ["Sunday","Monday","Thusday","Wednesday","Thruday","Friday","Saturday"];

  const [currentDate,setCurrentDate]=useState({h:0,m:0,s:0})
  useEffect (() => {
    setCurrentDate({h:data.getHours(),m:data.getMinutes(),s:data.getSeconds(),})
  })
//railway time display..... so normal time display function
function Time (t){
  if(t>12){
    return t-12;
  }
  return t;
}

//00:00:00 function
function addZero (t) {
  var len = t.toString().length;
  if(len <= 1){
    return "0"+t
  }
  return t;
}

  return (
    <main className='App'>
      <h1 style={{textAlign:"center", fontSize:"70px"}}>Digital Clock</h1>
     <div className='body'>
        <div className='child'>{addZero(Time(currentDate.h))}:</div>
        <div className='child'>{addZero(currentDate.m)}:</div>
        <div className='child'>{addZero(currentDate.s)}</div> 
     </div>
     
     <div className='display'>{addZero(data.getDay())}-{addZero(data.getDate())}-{addZero(data.getFullYear())}
     <div>
      {days[data.getUTCDay()]}
      </div>
      </div> 

      <Display/>
    </main>

  )
}

export default App