import React from 'react'
import CardA from '../ELEMENTX/Ui/Card/CardA'
import { data } from '../api/template_control'
import {motion } from 'framer-motion';

const Aboutus = ({Ref}) => {
 
  return (
    <>
      <motion.div 
   initial={{ opacity: 0,  translateY : 200 }}
   animate={{ opacity: 1, translateY : 0}}
     transition={{ delay: 0,duration : 0.6}}
   >
    <div id='community' className="abt-ctn big-bar">
 
   <div className="srv-title-ctn ">
                    <div className="srv-title font-cl font-[700] text-[28px] main-f">Our Community</div>
                    <div className="srv-line bg-sec"></div>
                </div>
               <div className="abt">
                  <img src={require(`../img/${data.about_section.community.photo}`)} alt="" className="abt-img pic" />
                  <div className="abt-txt text-[16px] font-[600] main-f font-cl">
                  {data.about_section.community.text}
                  </div>
                </div>
   <div className="abt-person-ctn big-bar">
     {
      data.about_section.people.map((data) => (
        <CardA Img={data.img} Name={data.name} Role={data.role} Social={data.social}/>
      ))
     }

    </div>
    </div>
    </motion.div>
    </>
  )
}

export default Aboutus