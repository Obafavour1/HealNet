import React, { useState } from 'react'
import { NavLinks } from '../data/constant'
import logo from '../assets/logo.svg'
import { Menu, SidebarCloseIcon } from 'lucide-react';
// import MenuBar from './MenuBar';
// import { logo } from '../assets'


const Navbar = () => {
  const [open, setOpen] =useState(false)
  return (
    <nav className='flex items-center justify-between'>
      <div onClick={()=>setOpen(!open)} className='fixed'>
        <div className={`${open ? 'visible transition-all duration-100': 'invisible'}`}>
          <div className='fixed bg-blue-200 w-1/2 top-0 px-5 right-0 h-full rounded-bl-[50px]'>
          <div className='flex justify-between mt-6'>
            <div className='grid gap-10 mt-12 text-neutral-900 font-semibold'>
                {
                    NavLinks.map(links=>{
                        return(
                            <div >
                              <a href={links.url}>
                                <p className=' hover:text-blue-700 cursor-pointer'>{links.name}</p>
                              </a>
                            </div>
                        )
                    })
                }
            </div>
            <SidebarCloseIcon className=' top-5 right-2 text-blue-950'/>  
        </div>
      </div>
        </div>
      </div>
      <div className='flex  gap-2 items-center'>
        <a href="#home">
          <img src={logo} alt="logo" className='w-[35px] h-[30px]' />
        </a>
        <h1 className='text-[24px] text-blues-700 font-bold'>HealNet</h1>
      </div>
      <div className='hidden md:flex gap-5 text-neutral-900 font-semibold'>
        {
          NavLinks.map(link =>{
            return(
              <a href={link.url}>
               <div key={link.name}  className=' hover:text-blue-700 cursor-pointer'>{link.name}</div>
              </a>
            )
          })
        }
      </div>
      <Menu onClick={()=>setOpen(true)} className='lg:hidden text-blues-700'/>
      {/* <Button type='button' >Join</Button> */}
      <a href="#support" className='hidden md:flex'>
        <div className='hover:scale-110 transition-all ease-in-out duration-[30ms] hidden md:flex px-5 cursor-pointer py-4 bg-gradient-to-r from-blues-200 leading-3 to-blues-300 text-white rounded-[10px] '>Join us</div>
      </a>
      
   </nav>
  )
}

export default Navbar