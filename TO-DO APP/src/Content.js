import React from 'react'
import ItemsList from './ItemsList';
import {FaTrash} from 'react-icons/fa';



const Content = ({items,setItems,handleChange,handleDelete})=> {
    
        
        
  return (
    <main>

        {(items.length)?(
            <ItemsList
            items={items}
            handleChange={handleChange} 
            handleDelete={handleDelete}
            />
          ):(
            <p>YOUR LIST IS EMPTY</p>
        )
    }

        
        
        
    </main>
    
  )
}

export default Content
