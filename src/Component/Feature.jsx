import React from 'react'
import { data } from '../api/template_control'
import {motion} from 'framer-motion'

const Feature = () => {
  return (
    <motion.div 
    initial={{ opacity: 0,  translateY : 200 }}
    animate={{ opacity: 1, translateY : 0}}
      transition={{ delay: 0,duration : 0.6}}
    >
    <div className='fe-ctn big-bar'>
<div className="pro-title-ctn">
            <div className="pro-header text-[13px] sec font-[700] main-f">OUR FEATURES</div>
            <div className="pro-title text-[32px] font-[600] main-f font-cl ">The best collaboration features</div>

        </div> 
        <div className="fe-card-ctn">
       
    {
      data.features_section.features.map((data) => (
        <div className="fe-card font-cl mega-trans">
        <img src={require('../img/layout3.png')} alt='' className='layout3' />
        <div className="fe-contact-ctn">
          <div className=" mega-trans fe-title font-cl main-f font-[700] text-[25px] text-center">{data.service}</div>
          <div className="fe-company-name text-[10px] sec font-[500] main-f text-center">BY</div>
          <div className="fe-company-name text-[13px] sec font-[500] sec-f text-center">{data.brand}</div>

        </div>
      </div>
      ))
    }

        </div>
                   </div>
    </motion.div>
  )
}

export default Feature