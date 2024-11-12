import React from 'react'
import worksimg from '../assets/worksimg.svg'

const Roadmap = () => {
  return (
   <section id='about' className=' lg:min-h-[500px] pt-10 mt-10'>
        <div className='text-center'>
            <h3 className='text-[32px] bg-gradient-to-r from-blues-50 to-blues-500 text-transparent bg-clip-text'>How <span>our platform </span> works</h3>
            <p className='text-neutral-400 lg:w-1/2 mx-auto mt-5 text-[16px]'>
                Navigating your healthcare journey with HealNet is seamless. Just follow these steps mentioned below to proceed with your selected services. You can also see our FAQ section for more guidance:
            </p>
        </div>
        <div className='w-8/12 mt-10 mx-auto max-sm:flex-col-reverse flex justify-between items-center'>
            <div className='flex flex-col gap-5 '>
                {/* <div>1</div> */}
                <div className='w-[300px]'>
                    <h4 className='text-[24px] font-medium'>Create Your Profile</h4>
                    <p className='text-neutral-700 text-[16px]'>
                        Sign up and fill in your medical history securely. Setting up your profile this way would 
                        ensure that you stay up-to-date with your medical processes.
                    </p>
                </div>
                <div className='w-[300px]'>
                    <h4 className='text-[24px] font-medium'>Choose Your Service</h4>
                    <p className='text-neutral-700 text-[16px]'>
                        Select from our range of services and book a consultation. Booking a
                        consultation with HealNet is fairly simple and straight-forward.
                    </p>
                </div>
                <div className='w-[300px]'>
                    <h4 className='text-[24px] font-medium'>Meet Your Doctor</h4>
                    <p className='text-neutral-700'>
                        Have a virtual consultation with one of our certified specialists, or go for a physical 
                        visit to the doctor in case you opted for a physical check-up.
                    </p>
                </div>
            </div>
            <div>
                <img src={worksimg} alt="" width={300} className='w-[400px]'/>
            </div>
        </div>
   </section>
  )
}

export default Roadmap