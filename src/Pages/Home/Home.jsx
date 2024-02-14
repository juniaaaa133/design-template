import React, { useEffect } from 'react'
import '../../css/index.css';
import ButtonC from '../../ELEMENTX/Ui/Buttons/ButtonC'
import Service from '../../Component/Service';
import Process from '../../Component/Process';
import Feature from '../../Component/Feature';
import Collab from '../../Component/Collab';
import Aboutus from '../../Component/Aboutus';
import Contact from '../../Component/Contact';
import {motion} from 'framer-motion';

const Home = () => {

let hero_title = "Designer's Design";
let hero_desc = "Let's take a look the Beautiful World with impressive designs ";
let hero_button_text = "Contact Us Now";

  return (
<>
<div className="hm-ctn">
  
  <div className="layout-cr1"></div>
  <div className="layout-cr2"></div>
  <img src={require('../../img/layout1.png')} alt="" className='layout1'/>
  <img src={require('../../img/layout2.png')} alt="" className='layout2'/>
  <img src={require('../../img/layout2.png')} alt="" className='layouth3'/>
  <motion.div 
   initial={{ opacity: 0,  translateY : 200 }}
   animate={{ opacity: 1, translateY : 0}}
     transition={{ delay: 0,duration : 0.6}}
   >  <div className="hm-main-div">
    <div className="hm-title-ctn">
      <div className="hm-bar bg-sec"></div>
      <div className="hm-title sec text-[13px] font-[500] main-f">{hero_title}</div>
      <div className="hm-bar bg-sec"></div>
    </div>
    <div className="hm-desc-ctn main-f text-[38px] font-[600] text-center font-cl">
      {hero_desc}
   </div>
    <div className="hm-btn">
      <ButtonC text={hero_button_text} />
    </div>
  </div>
  </motion.div>
  </div>

<Service/>
<div className="bar"></div>
<Process />
<Collab/>
<Feature/>
<Aboutus/>
<div className="big-bar"></div>
<div className="px-[20px]">
<Contact/>
</div>
</>
  )
}

export default Home