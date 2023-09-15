import React, { useContext } from 'react'

import { AppContext } from '../App'

const Forms = () => {

  const {nameRef,emailRef,reviewRef,handleSubmit} =useContext( AppContext)


  return (
    <main class=" h2 my-4  ">
    <div>
      <label class='my-4'>Name :</label>
      <br/>
      <input type='text' placeholder='Enter Name...' ref={nameRef}/>
      </div>
      <div>
      <label class='my-4'>Email :</label>
      <br/>
      <input type='text' placeholder='Enter Email....' ref={emailRef}/>
      </div>
      <div>
      <label class='my-4'>Review :</label>
      <br/>
      <textarea ref={reviewRef}></textarea>
      </div>
      <div>
        <button class='btn btn-primary btn-lg btn-outline-warning'  onClick={handleSubmit}>Submit</button>
      </div>

      </main>
  )
}

export default Forms