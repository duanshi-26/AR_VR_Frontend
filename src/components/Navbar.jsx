import logo from '../assets/logo.png'
import React from 'react'
import {navItems} from '../constants'
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">

                {/* logo ka dabba banaega ab */}

                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
                    <span className='text-xl tracking-tight'>VirtualR</span>
                </div>
                {/* center ke links using ul */}
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, index)=>(
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                {/* side ke sign in buttons */}
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create An Account</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar