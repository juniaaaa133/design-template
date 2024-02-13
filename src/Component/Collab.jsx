import React from 'react'
import { data } from '../api/template_control'
import { Fade } from 'react-reveal'

const Collab = ({Ref}) => {
  return (
  <Fade bottom cascade>
  <div id='work' className="big-bar">
          <div className="srv-title-ctn ">
                    <div className="srv-title font-cl font-[700] text-[28px] main-f">{data.logo_works.title}</div>
                    <div className="srv-line bg-sec"></div>
                </div>
    <div className='cl-ctn bg-sec bar'>

        <div className="cl-child">
    {
        data.logo_works.logo_pngs.map((item) => (
            <img className='cl-card' src={require(`../img/${item.img}`)} alt={item.img}/>
        ))
    }
        {
        data.logo_works.logo_pngs.map((item) => (
            <img className='cl-card' src={require(`../img/${item.img}`)} alt={item.img}/>
        ))
    }

        </div>
    </div>
    </div>
  </Fade>
  )
}

export default Collab