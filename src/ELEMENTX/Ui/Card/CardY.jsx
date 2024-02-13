import React from 'react'
import '../../BUILD.css'

const CardY = ({title,desc}) => {
  return (
    <div className='cy-ctn relative shadow-sm hover:shadow-md mega-trans'>
        <div className="cy-bg mega-trans"></div>
        <div className="cy-bgn mega-trans"></div>
        <div className="cy-title  absolute top-0 right-0 left-0 bottom-0 w-[80%] text-center m-auto h-fit font-[600] main-f text-[16px] font-cl">{title}</div>
        <div className="cy-desc-ctn mega-trans">
            <div className="cy-desc text-center text-[16px] font-[600]  main-f mega-trans">{desc}</div>
        </div>
    </div>
  )
}

export default CardY