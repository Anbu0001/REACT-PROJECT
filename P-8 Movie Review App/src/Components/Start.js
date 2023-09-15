import { useContext } from 'react';
import React from 'react'
import { AppContext } from '../App'
import { BsStar } from "react-icons/bs";

const Start = () => {
  const {star,handles1,handles2,handles3,handles4,handles5} = useContext(AppContext);
  const {s1,s2,s3,s4,s5} = star;
  return (
<div className='h2'>
 <div>
      <BsStar className={s1 && "text-bg-info" } onClick={handles1}/>  &nbsp;
      <BsStar className={s2 && "text-bg-info" } onClick={handles2}/>  &nbsp;
      <BsStar className={s3 && "text-bg-info" } onClick={handles3}/>  &nbsp;
      <BsStar className={s4 && "text-bg-info" } onClick={handles4}/>  &nbsp;
      <BsStar className={s5 && "text-bg-info" } onClick={handles5}/>  &nbsp;
      </div>

      </div>
  )
}

export default Start