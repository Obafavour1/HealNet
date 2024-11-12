import {  Services } from "../data/constant"
import { Support } from "../data/constant"
import { Legal } from "../data/constant"
import logo from '../assets/logo.svg'
import facebook  from '../assets/facebook.svg'
import instagram  from '../assets/instagram.svg'
import youtube  from '../assets/youtube.svg'
import linkedln  from '../assets/linkedln.svg'


const Footer = () => {
  return (
    <footer id="footer" className=" pt-10 pb-5">
        <div className="flex max-sm:flex-col max-sm:gap-y-5 flex-wrap justify-between">
            <div className="w-full  md:w-1/4">
                <a href="#home">
                    <div>
                        <img src={logo} alt="" className="cursor-pointer hover:scale-105"width={50}/>
                        <h1 className="mt-2 mb-5 text-blues-700 text-[42px]">HealNet</h1>
                    </div>
                </a>
                <p className="text-neutral-500">Experience personalized medical care from the comfort of your home.</p>
            </div>
            <div>
                <h5 className="mb-4 text-blues-500 font-semibold">Support</h5>
                {
                    Support.map(support =>{
                        return( 
                            <div>
                                <p className="mt-3 cursor-pointer hover:text-blues-200 text-neutral-500">{support.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h5 className="mb-4 text-blues-500 font-semibold">Service</h5>
                {
                    Services.map(service =>{
                        return(
                            <div>
                                <p className="mt-3 cursor-pointer hover:text-blues-200 text-neutral-500">{service.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h5 className="mb-4 text-blues-500 font-semibold">Legal</h5>
                {
                    Legal.map(legal =>{
                        return(
                            <div>
                                
                                <p className="mt-3 cursor-pointer hover:text-blues-200 text-neutral-500">{legal.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="flex max-sm:flex-col gap-y-2 justify-between border-t-2 border-blues-50 mt-10 pt-4">
            <div className="flex gap-3">
                <img src={facebook} alt="" className="cursor-pointer hover:scale-125"/>
                <img src={instagram} alt="" className="cursor-pointer hover:scale-125"/>
                <img src={linkedln} alt="" className="cursor-pointer hover:scale-125"/>
                <img src={youtube} alt="" className="cursor-pointer hover:scale-125"/>
            </div>
            <p className="text-neutral-400 text-[14px]">HealNet 2024 &Copy; All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer