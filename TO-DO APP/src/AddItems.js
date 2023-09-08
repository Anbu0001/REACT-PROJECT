import React from 'react'
import {FaPlus}  from 'react-icons/fa';
import {useRef} from "react"


const AddItems = ({newItem,setNewItem,handleSubmit}) => {
  
  const inputRef = useRef();

  return (
    <form onSubmit={handleSubmit} className='addForm'>
        <label htmlFor='addItems'>ADD Items </label>
        <input autoFocus
        
        
        id='addItems' type='text' placeholder='ADD Items' required
        
        value={newItem}

        onChange={(e)=>setNewItem(e.target.value)}

        ref={inputRef}
        />
        <button type='submit' aria-label='AddItems'

        onClick={()=>inputRef.current.focus()}>

        <FaPlus  />
        </button>
       
    </form>
  )
}

export default AddItems