import React from 'react'
// import calender from '../assets/calender.svg'
import refill from '../assets/refill.svg'
import notes from '../assets/notes.svg'
import booking from '../assets/booking.svg'
import prescription from '../assets/prescription.svg'
import online from '../assets/online.svg'

const Services = () => {
  return (
    <section id='services' className='min-h-[500px] lg:min-h-[500px] mt-10 pt-10'>
        <div className='text-center lg:w-1/2 mx-auto'>
          <h3 className='text-[32px] font-semibold'>Top <span className='bg-gradient-to-r from-blues-50 to-blues-500 text-transparent bg-clip-text'>services</span> we offer</h3>
          <p className='text-neutral-400 text-md my-5'>
            In today's fast-paced world, your health deserves the utmost attention and convenience. That's why HealNet offers a suite of integrated 
            services designed to cater to your healthcare needs digitally:
          </p>
        </div>
        <div>
            <div className=' gap-5 justify-between'>
              <div className='flex max-sm:flex-col gap-5 lg:gap-20'>
                <div className=' border-2 grid-cols-2 md:w-3/5 rounded-[20px] shadow-xl border-blues-60 p-6 '>
                  <img src={online} alt="" width={30} />
                  <h4 className='py-4'>Online Consultations</h4>
                  <p>
                    Consult with top doctors across various specialities via vidwo or chat communication. It's totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation.
                  </p>
                </div>
                <div className=' border-2 rounded-[20px] grid-cols-1 lg:w-2/5 shadow-xl border-blues-60 p-6 '>
                  <img src={booking} alt="" width={30} />
                  <h4 className='py-4'>Booking Appointments</h4>
                  <p>
                    Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features.                </p>
                </div>
              </div>
              <div className='flex max-sm:flex-col gap-5 mt-5 lg:mt-10'>
                <div className=' border-2 rounded-[20px] shadow-xl border-blues-60 p-6 '>
                  <img src={prescription} alt="" width={30} />
                  <h4 className='py-4'>Prescriptions</h4>
                  <p>
                    Receive and renew prescriptions digitally after your consultation with our specialists.                </p>
                </div>
                <div className=' border-2 rounded-[20px] shadow-xl border-blues-60 p-6 '>
                  <img src={notes} alt="" width={30} />
                  <h4 className='py-4'>Medical Notes</h4>
                  <p>
                    Obtain necessary medical notes for work or school with only a few click of hassle.                </p>
                </div>
                <div className=' border-2 rounded-[20px] shadow-xl border-blues-60 p-6 '>
                  <img src={refill} alt="" width={30} />
                  <h4 className='py-4'>Medicin Refills</h4>
                  <p>
                    Skip the pharmacy queues and save time + energy by ordering medicine refills online.
                  </p>
                </div>
              </div>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default Services