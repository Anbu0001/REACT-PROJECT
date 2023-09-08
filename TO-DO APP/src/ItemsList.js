import React from 'react'
import {FaTrash} from 'react-icons/fa';

const ItemsList = ({items,setItems,handleChange,handleDelete}) => {
  return (
    <div>

<ul>
        
        {items.map((p)=> (
         <li className="item" key={p.id}>
         <input type="checkbox" checked={p.check} onChange={()=>handleChange(p.id)}/>
           <label style={(p.check)?{textDecoration:"line-through"}:null} onDoubleClick={()=>handleChange(p.id) }>{p.item}    </label>
           <FaTrash onClick={()=>handleDelete(p.id)}role="button" tabIndex={0}/>
             </li>
         ))} 
   
         </ul>
        
    </div>
  )
}

export default ItemsList