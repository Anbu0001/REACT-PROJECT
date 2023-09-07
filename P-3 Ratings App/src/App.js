import React from 'react'
import "./index.css"
import { BsStarFill } from "react-icons/bs";
import { useState } from 'react';

const App = () => {
  const [s1,setS1] = useState(false)
  const [s2,setS2] = useState(false)
  const [s3,setS3] = useState(false)
  const [s4,setS4] = useState(false)
  const [s5,setS5] = useState(false);


  const handleS1 = () => {
    if (s3) {
      setS5(false);
      setS4(false);
      setS3(false);
      setS2(false);
      setS1(false);
  }
  else{
    setS1(true);
  }
  }
  const handleS2 = () => {
    if (s3) {
      setS5(false);
      setS4(false);
      setS3(false);
      setS2(false);
  }
  else{
    setS1(true);setS2(true);
  }
  }
  const handleS3 = () => {
    if (s3) {
      setS5(false);
      setS4(false);
      setS3(false);
  }
  else{
    setS1(true);setS2(true);setS3(true);
  }
  }
  const handleS4 = () => {
    if (s4) {
      setS5(false);
      setS4(false)
  }
  else{
    setS1(true);setS2(true);setS3(true);setS4(true);
  }
  }
  const handleS5 = () => {
    if (s5) {
      setS5(false);
  }
  else{
    setS1(true);setS2(true);setS3(true);setS4(true);setS5(true);
  }
  }
  

  return (
    <main className='App'>
      <div><BsStarFill className={s1 && "bg"} onClick={handleS1}/></div>
      <div><BsStarFill className={s2 && "bg"} onClick={handleS2}/></div>
      <div><BsStarFill className={s3 && "bg"} onClick={handleS3}/></div>
      <div><BsStarFill className={s4 && "bg"} onClick={handleS4}/></div>
      <div><BsStarFill className={s5 && "bg"} onClick={handleS5 }/></div>
      <br/>
      {s5 ? "5" : s4 ? "4" : s3 ? "3" : s2 ? "2" : s1 ? "1" : "0"}/5
    </main>

  )
}

export default App