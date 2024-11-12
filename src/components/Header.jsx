import React from 'react'
import Navbar from './Navbar'
import headerimg from '../assets/headerimg.svg'
import apple from '../assets/apple.svg'
import amazon from '../assets/amazon.svg'
import google from '../assets/google.svg'
import notion from '../assets/notion.svg'
import spotify from '../assets/spotify.svg'
import slack from '../assets/slack.svg'
import headerimg1 from '../assets/headerimg1.svg'
import headerimg2 from '../assets/headerimg2.svg'
import headerimg3 from '../assets/headerimg3.svg'

const Header = () => {
  return (
    <header id='home' className='pt-4 md:pt-10'>
      <Navbar/>
      <div className='mt-6 max-sm:flex-col-reverse md:mt-10 flex gap-[100px] w-[100%] justify-between'>
        <div className='mt-5 md:mt-10  md:w-[530px]'>
          <h2 className='text-[35px]  lg:text-[54px] leading-[36px] lg:leading-[58px] font-semibold mb-5 text-neutral-900 '>Your <span className=' bg-gradient-to-r from-blues-500 to-blues-50 text-transparent bg-clip-text'>trusted partner</span> in digital healthcare.</h2>
          <p className='text-justify text-blacks-100'>
            <span className='text-blues-600'>Empowering Your Health at Every Step.</span> Experience personalized medical care from the comfort of your home. Connect with <span className='text-blue-600'>certified doctors,</span> or manage prescriptions, 
            and schedule appointments with ease. Ready to take control of your health? <span className='text-blue-600'>Get Started</span> or Book an Appointment today.
          </p>
          <p className='bg-gradient-to-r from-blues-100 to-blues-300 px-5 py-3 text-white  w-fit rounded-2xl my-5'>Book an appointment</p>
          <div>
            <p className='text-blacks-50 text-[14px]'>Trusted by millions across the globe:</p>
            <div className='flex gap-3 mt-4'>
              <img src={amazon} alt="Amazon" width={45}/>
              <img src={apple} alt="Apple" width={35}/>
              <img src={google} alt="Google" width={35} />
              <img src={notion} alt="Notion"  width={35}/>
              <img src={spotify} alt="Spotify" width={35}/>
              <img src={slack} alt="Slack" width={35}/>
            </div>
          </div>
        </div>

        {/* <img src={headerimg} alt="" width={500} className='w-[40vw]'/>  */}
        
        <div className='hidden md:flex w-[50vw] relative'>
          <div className='w-[70%]'>
            <img src={headerimg} alt="" className='w-[100%]'/> 
            <img src={headerimg1} alt="" width={300}  className='bottom-[100px] absolute right-[150px] max-lg:h-[100px]'/>
            <img src={headerimg2} alt="" width={300} className='bottom-[100px] max-xl:bottom-[100px] absolute left-0'/>
            <img src={headerimg3} alt="" width={300} className='bottom-0 max-xl:bottom-[100px] absolute right-[200px] max-lg:h-[100px]'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header