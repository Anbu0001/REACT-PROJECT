import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import 'bootstrap/dist/css/bootstrap.min.css';

const Display = () => {
  const {users,handleDelete} = useContext(AppContext);

  return (
    <div>
      {users.map(u =>{
        return(
        <div >
          <div className='card'>
            <button class='del btn text-end bg-warning' onClick={()=>handleDelete(u.id)}>x</button>
            <h3 className='card title '>Name :{u.name}</h3>
            <h3 className='card title'>email :{u.email}</h3>
            <p className='card text h3'>Review :{u.review}</p>
            <h3 className='card Subtitle'>Rating :{u.mark}/5</h3>
            </div>
            </div>
        )
   } )}
     </div>
     ) 
     }

export default Display