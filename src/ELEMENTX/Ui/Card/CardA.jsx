import React from 'react'
import IconX from '../Icons/IconX'

const CardA = ({Img , Name ,Role,Social}) => {
  return (
    <div className="ca-person">
        <div className="calayer1">
            <div className="ca-icn-layer mega-trans">
                {
                    Social.map((data) => (
                        <IconX path={data.link} type={data.type} />
                    ))
                }
            </div>
            <div className="ca-info-ctn">
                <div className="ca-role sec text-[13px] font-[700] main-f">{Role}</div>
    <div className="ca-name-ctn">
        <div className="ca-line bg-sec"></div>
    <div className="ca-name font-cl main-f text-[20px] font-[600] text-center">{Name}</div>

    </div>
            </div>
        </div>
        <img src={require(`../../../img/${Img}`)} alt="" className="caper-img pic object-top" />
      </div>
  )
}

export default CardA