import React from 'react'
import '../../BUILD.css'
import IconX from '../Icons/IconX'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const FooterX = () => {
  return (
    <div className='ft-ctn '>
        <div className="ft-nav-ctn">
        <div className="ft-social">
            <FaFacebookF className='sec bcu text-[18px]'/>
            <FaInstagram className='sec bcu text-[18px]'/>
            <FaTelegramPlane className='sec bcu text-[18px]'/>
            <FaTiktok className='sec bcu text-[18px]'/>
        </div>
            <div className="ft-nav">
                <NavLink className='sec lg-f text-[16px] ' to='/'>HOME</NavLink>
                <NavLink className='sec lg-f text-[16px] ' to='/shop'>SHOP</NavLink>
                <NavLink className='sec lg-f text-[16px] ' to='/about'>ABOUT</NavLink>
                <NavLink className='sec lg-f text-[16px] ' to='/contact'>CONTACT</NavLink>

            </div>
        </div>
        <div className="flex gap-[13px] items-center ft-brand-ctn absolute bottom-[10px] m-auto right-[0] left-[0] w-fit h-fit text-white">
            <div className="text-[14px] lg-f">© </div>
            <div className="logo text-[12px] font-[400] sec-f w-fit h-fit flex items-center gap-[10px]"><div>ICONIC</div><div className='logo-line'></div><div className=' text-[12px] font-[400] sec-f'>PRESENTS</div></div>
        </div>
    </div>
  )
}

export default FooterX