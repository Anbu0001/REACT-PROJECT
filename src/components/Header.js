import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'



export default function Header(){
const[toggleMeanu,settoggleMeanu] = useState(false);

return <header className="flex justify-between px-5 py-2 bg-primary">
    <a className="font-bold text-black" href='#'>Anbarasan</a>
    <nav className="hidden md:block">      
    <ul  className="flex text-white">
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#resume'>Resume</a></li>
        <li><a href='#contact'>Contact</a></li>
    </ul>
    </nav>
    {/* @@@@@@@@@@ onclick funcaton show toggeMeanu && */}
    {toggleMeanu && <nav className="block md:hidden mobile-nav" >      
    <ul onClick={() => settoggleMeanu(!toggleMeanu)} className="flex flex-col text-white">
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        {/* <li><a href='#resume'>Resume</a></li> */}
        <li><a href='#contact'>Contact</a></li>
    </ul>
    </nav>
    }
    <button onClick={() => settoggleMeanu(!toggleMeanu)} className='block md:hidden'> <Bars3Icon className="text-white h-5"/></button>
</header>
}
