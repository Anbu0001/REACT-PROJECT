
import React,{useContext} from 'react'
import { AppContext } from '../App'

const Transaction = () => {
    const{text,setText,amount,setAmount,handleSubmit} = useContext(AppContext);
  return (
    <main class="text-center mt-3 p-4 border" >
    <div >
        <h3>Add Transaction</h3>
        </div>
        <div>
            <h3>text</h3><input type='text' placeholder='Enter Text.....'
            value={text} onChange={e=>setText(e.target.value)}></input>
        </div>

        <div>
            <h3>Amount <br/>  [nagetive - expense, pasitive + income]</h3> <input type='text' placeholder='Enter Amount.....'value={amount } onChange={e=>setAmount(e.target.value)}></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        </main>
  )
}

export default Transaction