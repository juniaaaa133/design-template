import React from 'react'
import CardA from '../ELEMENTX/Ui/Card/CardA'
import { data } from '../api/template_control'
import { Fade } from 'react-reveal'

const Aboutus = ({Ref}) => {
 
  return (
    <>
    <div id='community' className="abt-ctn big-bar">
   <Fade bottom cascade>
   <div className="srv-title-ctn ">
                    <div className="srv-title font-cl font-[700] text-[28px] main-f">Our Community</div>
                    <div className="srv-line bg-sec"></div>
                </div>
   </Fade>
               <Fade bottom cascade>
               <div className="abt">
                  <img src={require(`../img/${data.about_section.community.photo}`)} alt="" className="abt-img pic" />
                  <div className="abt-txt text-[16px] font-[600] main-f font-cl">
                  {data.about_section.community.text}
                  </div>
                </div>
               </Fade>
   <Fade bottom cascade>
   <div className="abt-person-ctn big-bar">
     {
      data.about_section.people.map((data) => (
        <CardA Img={data.img} Name={data.name} Role={data.role} Social={data.social}/>
      ))
     }
 

    </div>
   </Fade>
    </div>
    </>
  )
}

export default Aboutus