

const Booking = () => {
  return (
    <section>
       <div>
            <form action="" className='flex flex-wrap max-md:flex-col px-10 items-center max-md:w-[100vw] justify-center  gap-5'>
                <div className='flex gap-3 border items-center py-2 px-5 max-md:w-full mx-auto rounded-[16px]'>
                    <img src={email} alt="" width={30}/>
                    <input type="email" placeholder='Enter Your Email Address' className='w-full outline-none '/>
                </div>
                <div className='flex gap-3 border items-center py-2 px-5 max-md:w-full rounded-[16px]'>
                    <img src={contact} alt="" width={30}/>
                    <input type="number" placeholder='Enter Your Contact Number' className='w-full outline-none'/>
                </div>
                <div className='flex gap-3 border max-md:w-full items-center py-2 px-5 rounded-[16px]'>
                    <img src={calender} alt="" width={30}/>
                    <input type="email" placeholder='Select Date of Appointment' className='outline-none w-full'/>
                </div>

                <button type="button">Submit</button>
                
            </form>
        </div>
    </section>
  )
}

export default Booking