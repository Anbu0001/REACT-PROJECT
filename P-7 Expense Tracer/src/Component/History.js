import React,{useContext} from 'react'
import { AppContext } from '../App'

const History = () => {
    const{history} = useContext(AppContext);
  return (
    <div class="text-center">
        <h3>history</h3>

        {history.map((e,i)=>(
            <div key={i}>
                {e. text}  {e. amount}
            </div>
        ))}
        
    </div>
    
  )
}

export default History