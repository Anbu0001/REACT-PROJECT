import React, { useState } from 'react'
import "./index.css"
import Axios from "axios"
import { useEffect } from 'react'



const App = () => {
  useEffect(() =>{
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then (res => setUsers(res.data))
  },[])

  const [users,setUsers]=useState([])

  //input  enter name save 
  const[name,setName]=useState("")

  return (
    <main className='App'>

      <h1>Live Search filter</h1>

      <input placeholder='Enter Name.... '  
      value={name} onChange={e => setName(e.target.value)} />
      
      { name.length > 0 &&
        users.map (e => (
        <div> 
          { e.name.toLowerCase().includes(name.toLowerCase()) ? e.name : ""} 
          </div>
        
      ))}

    </main>

  )
}

export default App