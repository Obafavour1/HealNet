import {React, useRef} from 'react'
import email from '../assets/email.svg'
import contact from '../assets/contact.svg'
import calender from '../assets/calender.svg'
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';




const Support = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const form = useForm()

    

  const onSubmitEmail = (e) => {
    // e.preventDefault();  
    try{
        emailjs
        .sendForm('service_cpsve4m', 'template_36hrfpc' , form.current, {
          publicKey: 'HLLQ5afwn3Lw5GkYY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          
      );
      reset()
    } catch(error) {
        console.log('FAILED...', error.text);
      }finally{}
    //   e.target.reset()
    //   e.target.reset()
  };

  return (
    <section id='support' className='min-h-[400px] mt-10 flex flex-col items-center justify-center'>
        <div className='text-center '>
            <h3 className='text-[32px]'>Reach our <span>Help Desk</span> for support</h3>
            <p className='my-10'>Questions? Need assistance? Our dedicated support team is here to help your every step of the way:</p>
       </div>
       
        <div>

                {/* <form ref={form} onSubmit={sendEmail}>
                    <div className='flex gap-3 border items-center py-2 px-5 max-md:w-full mx-auto rounded-[16px]'>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div className='flex gap-3 border items-center py-2 px-5 max-md:w-full mx-auto rounded-[16px]'>
                        <label>Email</label>
                        <input type="email" name="user_email" />
                    </div>
                    <div className='flex gap-3 border items-center py-2 px-5 max-md:w-full mx-auto rounded-[16px]'>
                        <label>Message</label>
                        <textarea name="message" />
                    </div>
                    <input type="submit" value="Send" />
                </form> */}
            <form 
                ref={form} 
                onSubmit={handleSubmit(onSubmitEmail)} 
               
                action="" className='flex flex-wrap max-md:flex-col px-10 items-center max-md:w-[100vw] justify-center  gap-5'>
                <div className='flex gap-3 border items-center py-2 px-5 max-md:w-full mx-auto rounded-[16px]'>
                    <img src={email} alt="" width={30}/>
                    <input {...register('email', {required:true}) } name='email' type="email" placeholder='Enter Your Email Address' className='w-full outline-none '/>
                </div>
                {errors.email && <p role="alert">{errors.email.message}</p>}
                <div className='flex gap-3 border items-center py-2 px-5 max-md:w-full rounded-[16px]'>
                    <img src={contact} alt="" width={30}/>
                    <input {...register('phoneNumber',{required:true})} name='message' type="number" placeholder='Enter Your Contact Number' className='w-full outline-none'/>
                </div>
                {errors.phoneNumber && <p role="alert">{errors.phoneNumber.message}</p>}
                <div className='flex gap-3 border max-md:w-full items-center py-2 px-5 rounded-[16px]'>
                    <img src={calender} alt="" width={30}/>
                    <input {...register('date', {required:true})} name='message' type="date" placeholder='Select Date of Appointment' className='outline-none w-full'/>
                </div>
                {errors.date && <p role="alert">{errors.date.message}</p>}
                
                <button  type="submit" className='bg-blues-300 text-white py-3 px-5 rounded-lg'>Submit</button>
                
            </form>
        </div>
    </section>
  )
}

export default Support