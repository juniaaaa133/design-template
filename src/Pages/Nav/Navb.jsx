import React, { useRef, useState } from 'react'
import '../../css/index.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import LogoX from '../../ELEMENTX/Ui/Logo/LogoX';


const Navb = () => {

let [drawer,setDrawer] = useState(false);
let home = useRef(null);
let services = useRef(null);
let work = useRef(null);
let about = useRef(null);
let contact = useRef(null);

let ScrollEffect = (elementRef) => {
  window.scrollTo({
    top : elementRef.current.offsetTop,
    behavior : 'smooth',
  })
  if(drawer == true ){
    setDrawer(false)
  }
}

  return (
<div className='nav-ctn'>
<div  className="nav-title text-[20px] font-cl sec main-f">Designer's Design</div>
<div className="ninfos-ctn">
    <a href='/'   className='text-[13px] main-f font-cl'>Home</a>
    <div className="nline"></div>
    <a href='#service'  className='text-[13px] main-f font-cl'>Service</a>
    <div className="nline"></div>
    <a href='#work'   className='text-[13px] main-f font-cl'>Work</a>
    <div className="nline"></div>
    <a href='#community'   className='text-[13px] main-f font-cl'>Community</a>
    <div className="nline"></div>
</div>
<div className="nav-c">
    <a  href='#contact' className='text-[13px] main-f font-cl'>Contact</a>
</div>
{/* MOBILE */}
<CiMenuBurger onClick={()=>setDrawer(true)} className='bcu text-[13px] font-cl nv-mb-icn'/>
<div className={drawer == false ? "nv-mb-drawer mega-trans" : "nv-mb-drawer-opened mega-trans"}>
<GoPlus onClick={()=>setDrawer(false)} className='bcu nvcancel'/>
<a href='/' onClick={()=>setDrawer(false)} className={({isActive})=> isActive ? 'text-[13px] main-f sec mega-trans' : 'text-[13px] main-f font-cl mega-trans'}>Home</a>
    <a href='#service' onClick={()=>setDrawer(false)} className={({isActive})=> isActive ? 'text-[13px] main-f sec mega-trans' : 'text-[13px] main-f font-cl mega-trans'}>Service</a>
    <a href='#work' onClick={()=>setDrawer(false)} className={({isActive})=> isActive ? 'text-[13px] main-f sec mega-trans' : 'text-[13px] main-f font-cl mega-trans'}>Work</a>
    <a href='#community' onClick={()=>setDrawer(false)} className={({isActive})=> isActive ? 'text-[13px] main-f sec mega-trans' : 'text-[13px] main-f font-cl mega-trans'}>Community</a>
    <a href='#contact' onClick={()=>setDrawer(false)} className={({isActive})=> isActive ? 'text-[13px] main-f sec mega-trans' : 'text-[13px] main-f font-cl mega-trans'}>Contact</a>
    <div className="logo-xctn w-fit h-fit absolute bottom-[20px] left-0 right-0 m-auto">
  <LogoX/>
</div>
</div>

</div>
  )
}

export default Navb