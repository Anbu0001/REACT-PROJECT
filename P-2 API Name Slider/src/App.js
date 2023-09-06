import React from 'react';
import "./index.css";
import "./App.css";
import { useEffect,useState } from 'react';
import  Card from './Card';
import { FaLessThan,FaGreaterThan } from 'react-icons/fa'; 


const App = () => {

  var [index,setIndex] = useState("0");
  

  const [user,setUser] = useState([{
    id:"",name:"",email:"",username:"",
  }])

  const {id,name,username,email} = user[index];

 
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (res => res.json())
    .then (res => setUser(res))
  },[])

  const lessThan = () => {
    if(index <= 0){
      index=user.length;
      setIndex(--index);
    }
    else{
      setIndex(--index);
    }
  }

  const greaterThan = () => {
    if(index >= user.length -1){
      index = -1;
      setIndex(++index) 
    }
    else{
      setIndex(++index)
    }
  }

  return (
    <div className='App'>
      <Card>
        <div>
          id:{id}
        </div>
        <div>
          Name:{name}
        </div>
        <div>
          username:{username}
        </div>
        <div>
          email:{email}
        </div>
        
      </Card>
    <div className="button" >
    <button onClick={lessThan}>
    <FaLessThan/>
    </button>

    <button onClick={greaterThan} > 
    <FaGreaterThan/>
    </button>

    </div >
    

    </div>


    

  )
}

export default  App