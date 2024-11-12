import React from 'react'
import story from '../assets/story.svg'

const Story = () => {
  return (
    <section id='blog' className=' min-h-[500px] lg:min-h-[500px]  pt-20 '>
        <div className=' border-2 border-blues-60 py-5 px-5 lg:px-10 rounded-[16px] bg-gradient-to-r from-[#C5ECFF]/5 to-blues-60/5'>
          <h3 className='text-center text-[32px]'><span className='bg-gradient-to-r from-blues-500 to to-blues-50 text-transparent bg-clip-text'>HealNet's Story:</span> Get to know us</h3>
          <div className=' md:flex w-full gap-24 mt-10'>
            <img src={story} alt="" className='md:w-2/5 mx-auto'/>
            <div className='md:w-3/5 mt-5 lg:mt-10'>
              <p className='w-full text-justify md:w-[80%]'>
                HealNet is more than just an online medical service; it's a movement towards accessible, efficient,
                and compassionate healthcare for all. Founded by a team of visionary doctors, healthcare professionals, and technology experts, we are driven by the mission to deliver exceptional medical care directly to you, no matter where you are. Our platform is built on the pillars of trust, innovation, and patient-centricity, ensuring that every interaction is personalized and every treatment plan is tailored to your unique needs. With a network of licensed practitioners from diverse medical fields, we guarantee comprehensive care that's just a click away.
              </p>
              <button type="button" className='hover:scale-105 transition-all ease-in-out duration-[30ms] px-5 py-3 mt-5 bg-blues-200 text-white rounded-[16px]'>Learn more about us</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Story