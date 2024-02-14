import React from 'react'
import { data } from '../api/template_control'
import {motion} from 'framer-motion'

const Process = () => {
  return (
    <div className='pro-ctn'>
        <div className="pro-layer1"></div>
        <motion.div 
   initial={{ opacity: 0,  translateY : 200 }}
   animate={{ opacity: 1, translateY : 0}}
     transition={{ delay: 0,duration : 0.6}}
   >
<div className="pro-abs">
    <div className="pro-title-ctn">
            <div className="pro-header text-[13px] sec font-[700] main-f">{data.process_section.header.title}</div>
            <div className="pro-title text-[32px] font-[600] main-f font-cl ">{data.process_section.header.desc}</div>
        </div>
        <div className="bar"></div>
   <div className="pro-body-main">
       {
        data.process_section.processes.map((data) => (
            data.id % 2 !== 0 ?
            <div className="pro-body-ctn">
            <div className="pro-box">
                    <div className="probox-layout bg-sec"></div>
                    <div className="probox-txt  font-[700] text-[16px] font-cl main-f">{data.title}</div>
                </div>
                       
         <div className="pro-txt font-cl text-[16px] main-f font-[600] text-justify">{data.desc}</div>
            </div>
            :
            <div className="pro-body-ctn-R pro-body-ctn">
            <div className="pro-txt font-cl text-[16px] main-f font-[600] text-justify">{data.desc}</div>
                <div className="pro-box">
                    <div className=" plr bg-sec"></div>
                    <div className="probox-txt  font-[700] text-[16px] font-cl main-f">{data.title}</div>
                </div>
            </div>
        ))
       }
   </div>
    </div>
</motion.div>
    </div>
  )
}

export default Process