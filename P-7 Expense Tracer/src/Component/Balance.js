
import React,{useContext} from 'react'
import { AppContext } from '../App'
 


const Balance = () => {
     const {balance,income,expense} = useContext(AppContext);
  return (
    <div class="text-center mt-3 p-4 border"t5>
        <div >
            <h3 >Your Balance : Rs.{balance}</h3>
        </div>
        <div>
            <h3>Income : Rs.{income}</h3>
            <h3>Expense : Rs.{expense}</h3>
            </div>
    </div>
  )
}

export default Balance