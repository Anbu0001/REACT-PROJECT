import React from 'react'
import "./index.css"
import { useState } from 'react'
import Display from './Display'
import Button from './Button'




const App = () => {

  const [time,setTime] =useState({ms:0,s:0,m:0,h:0});

  const [inter,setInter] = useState()
  const [status,setStatus]  = useState (0);

  var updatedMs=time.ms,updatedS=time.s,updatedM=time.m,updatedH=time.h

 

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 60){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({
      ms:updatedMs,s:updatedS,m:updatedM,h:updatedH})

  }

  const start = () =>{
    setInter(setInterval(run,10));
     setStatus(1);
   }

  const stop = () =>{
    clearInterval(inter);
    setStatus(0)
   
  }
  const reset = () =>{
    clearInterval(inter);
    setTime({ms:0,s:0,m:0,h:0});
    setStatus(0);
  }
  const add = () => {
     
  }
  return (
    <main className='App'>
      <h1>Stop Watch</h1>
      <div className='app'>
     <Display time={time}/>
     <Button start={start} status={status} stop={stop} reset={reset} add={add}/>
     
     </div>
     
    </main>
    
    
  )
}

export default App