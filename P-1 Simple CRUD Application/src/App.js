import React, { useState } from 'react'
import './index.css'
import { FaTrashAlt } from 'react-icons/fa';


const App = () => {

  const [name,setName] = useState("");
  const [id,setId] = useState("");
  const [role,setRole] = useState("");
  const [employee,setEmployee] = useState([{id:1,name:"Anbu",role:"Devloper"}]);

  //Add Employee....
  const AddEmployee =() => {
    //console.log(id,name,role);
    setEmployee([...employee,{id:id,name:name,role:role}])
    setId(""); setName(""); setRole("");
  }
  //Delete All Employee => simple function
  const DeleteAll =()=>{
    setEmployee([]);
  }

  //Delete individual employee

  const deleteIndividual =(id) =>{
    const newEmp=employee.filter(e=>e.id !==id);
    setEmployee(newEmp)
  }

  return (
    <main className='App'>
      <h1>Employee Mangement</h1>
      <section className='from'>
        <input required type="number" placeholder='Enter Id...'
        value={id} onChange={e=>setId(e.target.value)}/>

        <input required type='text' placeholder='Enter Name...'
        value={name} onChange={e=>setName(e.target.value)}/>

        <input required type='text' placeholder=' Role...'
        value={role} onChange={e=>setRole(e.target.value)}/>

        <button onClick={AddEmployee}>Add</button>
        <button onClick={DeleteAll} > Delete All </button>
        
      </section>

      {/* display in input */}

       {employee.map((emp,i) => {
        return (
          <div key={i}>
          {emp.id} {emp.name} {emp.role}   <FaTrashAlt className="del" role="button"  onClick={() => {deleteIndividual(emp.id)}}/>
          </div>
          
        )
      
})}
       


    </main>

  );
}

export default App