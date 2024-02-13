import React from 'react'
import '../../BUILD.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const IconX = ({type,path}) => {

  return (
    <a href={path} className='mega-trans icn-a p-[8px]'>
        { 
           type =='facebook' ?
        <FaFacebookF className='mega-trans font-cl text-[18px]'/>
            : type == 'instagram' ?
            <FaInstagram className='mega-trans font-cl text-[18px]'/>
:type == 'telegram' ?
            <FaTelegramPlane className='mega-trans font-cl lg-f text-[18px]'/>
:type == 'x' ?
<FaXTwitter className='mega-trans font-cl lg-f text-[18px]'/>
:type == 'snapchat' ?
<FaSnapchat className='mega-trans font-cl lg-f text-[18px]'/>
:type == 'threads' ?
<FaThreads className='mega-trans font-cl lg-f text-[18px]'/>
:type == 'tiktok' ?
<FaTiktok className='mega-trans font-cl lg-f text-[18px]'/>
:
<FaPinterestP className='mega-trans font-cl lg-f text-[18px]'/>
        }
    </a>

  )
}

export default IconX