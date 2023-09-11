import React from 'react'
import "./index.css"
import { createContext,useState } from 'react'
import { useContext } from "react"
import Header from './Component/Header'
import Balance from './Component/Balance'
import History from './Component/History'
import Transaction from './Component/Transaction'
import 'bootstrap/dist/css/bootstrap.min.css';
export const AppContext = createContext(null); 

const expenseArray = [] , incomeArray = []; 
const reducer = (acc,curr) => acc=curr;

function App  ()  {
  
  const  [balance,setBalance]=useState(0);
  const  [income,setIncome]=useState(0);
  const  [expense,setExpense]=useState(0);
  const  [history,setHistory]=useState([]);
  const  [text,setText]=useState("");
  const  [amount,setAmount]=useState('');

  // const  [AppContext,crateContext]=useState(0);

  

  const handleSubmit = () => {
    let intAmount = parseInt(amount);
    if(text == ""||amount === "") {
      alert("Invaild Input");
      return;
    }

   setHistory([...history,{text:text,amount:amount}]);
   setText("");  setAmount("");

   if(intAmount > 0){
    setBalance (intAmount + balance)
    incomeArray.push(intAmount);
    setIncome(incomeArray.reduce(reducer));

  }
  else{
    setBalance( balance +  intAmount )
    expenseArray.push(intAmount)
    setExpense((-expenseArray.reduce(reducer)));
  }
  

  }                                    
  return (
    <div class="Container bg-info">
    <AppContext.Provider value={{ balance,income,expense,history,setHistory,text,setText,amount,setAmount,handleSubmit
    }}>
     
     <Header/>
     <br/><br/>
     <Balance />
     <br/><br/>
     <History/>
     <br/><br/>
     <Transaction/>
     </AppContext.Provider>
    </div>
  )
}

export default App