import contact from '../assets/contact.svg'
import team1 from '../assets/team1.svg'
import team2 from '../assets/team2.svg'

const Team = () => {
  return (
    <section id='doctors' className='lg:min-h-[500px] pt-10'>
        <div className='text-center '>
            <h3 className='text-[32px] font-semibold'><span className='bg-gradient-to-r from-blues-50 to-blues-500 text-transparent bg-clip-text'>Masters of Medicine:</span> <br /> Meet our team of specialists</h3>
            <p className='text-neutral-400 my-5 md:my-10 lg:w-2/3 mx-auto'>
                Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique blend of 
                expertise, empathy, and experience to ensure that health is in the best hands:
            </p>
        </div>

        <div className='w-full lg:w-1/2 gap-5 flex max-sm:flex-col max-sm:px-4 shadow-lg pr-8 pt-8 rounded-[20px] mx-auto bg-gradient-to-br from-blues-400 to-blues-600'>
            <img src={team1} alt="" width={500} className='max-md:w-[150px] mx-auto'/>
            <div>
                <h4 className='text-blues-5'>Dr. Sarah Johnson(Cardiologist)</h4>
                <p className='py-5 text-blues-5'>
                    Heart health is Dr. Wong’s passion, and her approach to cardiology integrates cutting-edge technology with compassionate care. She’s a respected voice in 
                    the prevention of heart disease and a trusted partner to her patients on their journey to wellness.
                </p>
                <a href="#support">
                    <button type="button" className='hover:scale-110 transition-all ease-in-out duration-[30ms] flex text-blues-500 gap-3 bg-white py-3 px-5 mb-5 rounded-full items-center font-semibold'>Book appointment <img src={contact} alt="" /></button>
                </a>
            </div>
        </div>

        <div className='lg:w-1/2 flex max-sm:flex-col max-sm:px-4 gap-5 mt-10 shadow-lg pr-8 pt-8 rounded-[20px] mx-auto bg-gradient-to-br from-blues-400 to-blues-600'>
            <img src={team2} alt="" className='max-md:w-[150px] mx-auto'/>
            <div>
                <h4 className='text-blues-5'>Dr. Mark Lee(Dermatologist)</h4>
                <p className='py-5 text-blues-5'>
                    Dr. Lee is a visionary in dermatology, advancing treatments for skin health with a gentle, holistic approach. His dedication to clinical excellence and patient education has made him a leader in dermatological 
                    care. He’s known for his precision and commitment to patient-centered care.
                </p>
                <a href="#support">
                    <button type="button" className='hover:scale-110 transition-all ease-in-out duration-[30ms] flex text-blues-500 gap-3 bg-white py-3 px-5 mb-5 rounded-full items-center font-semibold'>Book appointment <img src={contact} alt="" /></button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Team