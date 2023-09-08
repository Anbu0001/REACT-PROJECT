
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItems from './AddItems';
import SearchItem from './SearchItem';
import { useEffect } from 'react';

function App() {

  const [newItem,setNewItem]=useState('');

   const[search,setSearch]=useState('');

  useEffect(()=>{
    console.log("load time");
  },[])
  console.log("after");

  useEffect(()=>{
    JSON.parse(localStorage.getItem('todo_list'))
  },[]
  )



  const handleSubmit = (e)=>{

    addItem(newItem);

    e.preventDefault();
    console.log("submited");

    if(!newItem)return;
    console.log(newItem);
    //add
    setNewItem('');
  }
//
  const addItem = (item) => {
    const id = items.length ? items[items.length-1].id+1 : 1
    const addNewItem={id, check:false,item}

    const listItems=[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems) )
  }
  
  
 




   const [items,setItems] = useState([
    //{
//     id:1,
//     check:false,
//     item:"HTML"
// },
// {
//     id:2,
//     check:false,
//     item:"CSS"
// },
// {
//     id:3,
//     check:false,
//     item:"JS"
// }
])

const handleChange = (id) =>{
    const listItems = items.map((item)=>
       item.id===id?{...item,check:!item.check}:item)
       setItems(listItems);
    }

   const handleDelete=(id)=>{
   const listItems= items.filter((item)=>item.id !==id)
   setItems(listItems);
}

  return (
    <div className="App">

      <Header title="REACT TODO list"/>

      <AddItems newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>

      <SearchItem search={search} setSearch={setSearch}/>
      
      <Content items={items.filter(item=>((item.item).includes(search)))} setItems={setItems} 
      
      
      handleChange={handleChange}
       handleDelete={handleDelete}/>
      
      <Footer length={items.length}/>

     
         </div>
  );
}

export default App;
