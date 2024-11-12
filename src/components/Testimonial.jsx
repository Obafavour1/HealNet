import React from 'react'
import linda from '../assets/linda.svg'
import henry from '../assets/henry.svg'
import joshua from '../assets/joshua.svg'
import samantha from '../assets/samantha.svg'


const Testimonial = () => {
  return (
    <section className='lg:min-h-[500px] mt-10'>
        <div className='text-center mb-10 '>
            <h3 className='text-[32px] lg:w-1/2 mx-auto font-semibold'><span className='bg-gradient-to-r from-blues-50 to-blues-500 text-transparent bg-clip-text'>Patient Testimonials:</span> <br /> Hear from Those We've Cared For</h3>
            <p className='text-neutral-400'>Discover the difference we make through the voices of those we've served:</p>
        </div>
        <div>
            <div className='flex max-sm:flex-col gap-y-3 gap-x-2 justify-between'>
                <div className='flex  lg:w-[500px] shadow-xl p-5 gap-3 bg-gradient-to-r from-blues-10 to-blues-150 rounded-[20px]'>
                    <img src={linda} alt="" width={200} />            <div>
                        <p>“After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.”</p>
                        <h5 className='font-semibold'>-Linda A.</h5>
                    </div>
                </div>
                <div className='flex lg:w-[500px] shadow-xl p-5 gap-3 bg-gradient-to-r from-blues-10 to-blues-150 rounded-[20px]'>
                    <img src={henry} alt="" width={200} />            <div>
                        <p>“Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.”</p>
                        <h5 className='font-semibold'>-Henry B.</h5>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap gap-5 lg:gap-20 my-12 text-center content-center justify-center'>
                <div>
                    <p className='text-[42px] font-bold bg-gradient-to-l from-blues-50 to-blues-500 text-transparent bg-clip-text'>10,000+</p>
                    <span className='text-[15px] text-neutral-500'>Succesful Consultations</span>
                </div>
                <div>
                    <p className='text-[42px] font-bold bg-gradient-to-l from-blues-50 to-blues-500 text-transparent bg-clip-text'>2,500+</p>
                    <span className='text-[15px] text-neutral-500'>Healthcare Professionals</span>
                </div>
                <div>
                    <p className='text-[42px] font-bold bg-gradient-to-l from-blues-50 to-blues-500 text-transparent bg-clip-text'>98%</p>
                    <span className='text-[15px] text-neutral-500'>Patient Satisfaction Rate</span>
                </div>
                <div>
                    <p className='text-[42px] font-bold bg-gradient-to-l from-blues-50 to-blues-500 text-transparent bg-clip-text'>200+</p>
                    <span className='text-[15px] text-neutral-500'>Top Specialists</span>
                </div>
            </div>

            <div className='flex gap-x-2 max-sm:flex-col gap-y-3 justify-between'>
                <div className='flex lg:w-[500px] shadow-xl p-5 gap-3 bg-gradient-to-r from-blues-10 to-blues-150 rounded-[20px]'>
                    <img src={joshua} alt="" width={200} />
                    <div>
                        <p>“The prescription refill system is a game-changer for managing my diabetes. It’s really efficient and completely hassle-free.”</p>
                        <h5 className='font-semibold'>-Joshua T.</h5>
                    </div>
                </div>
                <div className='flex lg:w-[500px] shadow-xl p-5 gap-3 bg-gradient-to-r from-blues-10 to-blues-150 rounded-[20px]'>
                    <img src={samantha} alt="" width={200} />            
                    <div>
                        <p>“Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life.”</p>
                        <h5 className='font-semibold'>-Samantha K.</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial