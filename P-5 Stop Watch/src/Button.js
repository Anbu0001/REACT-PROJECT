import React from 'react'

const Button = ({start,status,reset,stop,add}) => {
  return (
    <div className='btn'>
        {status===0 && <button onClick={start}>Start</button>}
        {status===1 &&
        <div>
            <button onClick={reset}>Reset</button>&nbsp;
            <button onClick={stop}>Stop</button>
            <button onClick={add}>Add</button>
            </div>}
        
        </div>
  )
}

export default Button