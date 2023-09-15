import React from 'react'
import "./index.css"
import Forms from './Components/Forms'
import Start from './Components/Start'
import Display from './Components/Display'
import { useRef,useState,createContext} from 'react'
//uuid
// import { v4 as uuidv4 } from 'uuid';
import uuid from 'react-uuid';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

 export const AppContext = createContext(null);

const App = () => {

  const intivule = {s1:false,s2:false,s3:false,s4:false,s5:false};
  const [star,setStar] = useState(intivule);

  const[users,setUsers] = useState([]);
  
   
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const reviewRef = useRef(null);

  //function

  const handleSubmit = () => {
    let id = uuid();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let review = reviewRef.current.value;
    let mark = calcMark();

     if (name === "" || review === "" || review === "" || s1 === false){
      alert("fill the form");
      return;
     };
     setUsers([...users,{id:id, name:name,email:email,review:review,mark:mark}])
     console.log(users);
    }
  
    const handleDelete = (id) =>{
      setUsers(users.filter(e => e.id!==id))
    }

  const {s1,s2,s3,s4,s5} = star;
 
  const handles1 = () => {
    if(s5){
      setStar({s1:false,s2:false,s3:false,s4:false,s5:false});
      return;
    }
    setStar({s1:true,s2:false,s3:false,s4:false,s5:false})
  } 
  const handles2 = () => {
    if(s5){
      setStar({s1:true,s2:false,s3:false,s4:false,s5:false});
      return;
    }
    setStar({s1:true,s2:true,s3:false,s4:false,s5:false})
  }
  const handles3 = () => {
    if(s5){
      setStar({s1:true,s2:true,s3:false,s4:false,s5:false});
      return;
    }
    setStar({s1:true,s2:true,s3:true,s4:false,s5:false})
  }
  const handles4 = () => {
    if(s5){
      setStar({s1:true,s2:true,s3:true,s4:false,s5:false});
      return;
    }
    setStar({s1:true,s2:true,s3:true,s4:true,s5:false})
  }
  const handles5 = () => {
    if(s5){
      setStar({s1:true,s2:true,s3:true,s4:true,s5:false});
      return;
    }
    setStar({s1:true,s2:true,s3:true,s4:true,s5:true})

    
  }
  const calcMark = () => {
    if(s5){
      return '5'
    }
    else if(s4){
      return "4"
    }
    else if (s3){
      return "3"
    }
    else if (s2){
      return "2"
    }
    else if (s1){
      return "1"
    }
    else {
      return "0"
    }
  }

  return (
    <main class='container text-center bg-light'>
      <h1 class='bg-info my-5'>Movie Review App</h1>
      <AppContext.Provider  value={{nameRef,emailRef,reviewRef,handleSubmit,star,setStar, handles1,handles2,handles3,handles4,handles5,users,handleDelete}}>      
      <Forms/>
      <br/><br/>
      <Start/>
      <br/><br/>
      <Display/>
      </AppContext.Provider>
    </main>
  )
}

export default App