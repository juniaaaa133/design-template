import React from 'react'
import CardZ from '../ELEMENTX/Ui/Card/CardZ'
import GalleryX from '../ELEMENTX/Ui/Gallery/GalleryX'
import CardY from '../ELEMENTX/Ui/Card/CardY'
import ButtonC from '../ELEMENTX/Ui/Buttons/ButtonC'
import { data } from '../api/template_control'
import {motion} from 'framer-motion'

const Service = ({Ref}) => {
  
  return (
    <div id='service' className='srv-main'>
            <div className="bar-p"></div>
            {/* <div className="srv-layer1 bg-sec"></div> */}
            {/* <div className="srv-layer2 bg-sec"></div> */}
            <div className="srv-layer3 bg-sec"></div>

            <motion.div 
   initial={{ opacity: 0,  translateY : 200 }}
   animate={{ opacity: 1, translateY : 0}}
     transition={{ delay: 0,duration : 0.6}}
   >
          <div className="srv-cont">
                <div className="srv-title-ctn ">
                    <div className="srv-title font-cl font-[700] text-[28px] main-f">Services</div>
                    <div className="srv-line bg-sec"></div>
                </div>
                <div className="srv-body-ctn">
                    <div className="srv-body font-[600] text-[16px] main-f font-cl">
                      {data.service_section.service_header.service_header_text}
                    </div>
                    <a href={data.service_section.service_header.section_button.section} className="srv-btn">
                        <ButtonC text={data.service_section.service_header.section_button.text} />
                    </a>
                </div>
                <div className="srv-card-ctn">
          {
            data.service_section.services.map((srvs,idx) => (
              <div className="srvcd">
              <CardY desc={srvs.service_desc} title={srvs.service_name}/>
              </div>
            ))
          }
                 
                </div>
            </div>
          </motion.div>
    </div>
  )
}

export default Service