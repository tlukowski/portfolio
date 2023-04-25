import React from 'react'
import logo from '../../assets/logo.svg';

const navigation = [
  {name: "Home", href:"#", current:true},
  {name: "Projects", href:"#", current:false},
  {name: "Tech", href:"#", current:false},
  {name: "Contact", href:"#", current:false}
]

const Navbar = () => {
  return (
    <nav className='flex justify-between px-36 py-12 items-center bg-black'>
      <img src={logo} alt=''></img>
      <ul className='flex gap-x-12'>
        {navigation.map((item) => (
          <li className='text-2xl text-white'>
            <a  href={item.href}>{item.name}</a>
           </li>
        )) }        
      </ul>
    </nav>
  )
}

export default Navbar
