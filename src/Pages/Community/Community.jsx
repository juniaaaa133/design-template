import React from 'react'
import Aboutus from '../../Component/Aboutus'
import ButtonC from '../../ELEMENTX/Ui/Buttons/ButtonC'
import { NavLink } from 'react-router-dom'

const Community = () => {
  return (
    <div className='w-[100%]'>
        <div className="com-ctn">
            <div className="com-title text-[29px] font-cl sec-f ">OUR COMMUNITY</div>
            <img src='https://i.pinimg.com/236x/7e/22/5f/7e225fd952ddf2b5799044e0984462ee.jpg' alt="" className="com-img pic" />
        </div>
        <div className='com-main-ctn big-bar'>
        <Aboutus/>
        </div>
    <div className="com-ct-ctn bar">
        <div className="com-desc text-[29px] font-cl sec-f">We are always ready for your questions.</div>
        <NavLink to='/contact' className="com-btn">
            <ButtonC text={'be in touch'}/>
        </NavLink >
    </div>
    </div>
  )
}

export default Community