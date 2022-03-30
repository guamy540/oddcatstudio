import React, {useState} from 'react'
import './herocard.css'
import bazaar500 from '../../images/webp/bazaar500.webp'
import benice500 from '../../images/webp/be-nice500.webp'
import evangelion500 from '../../images/webp/evangelion500.webp'
import oversized500 from '../../images/webp/oversized500.webp'
import relatable500 from '../../images/webp/relatable500.webp'
import underwood500 from '../../images/webp/underwood500.webp'
import giyu500 from '../../images/webp/giyu500.webp'
import giyu2500 from '../../images/webp/giyu2500.webp'
import heatwave500 from '../../images/webp/heat500.webp'
import icyhot500 from '../../images/webp/icy-hot500.webp'
import order500 from '../../images/webp/order500.webp'
import skullface500 from '../../images/webp/skull500.webp'
import sneak500 from '../../images/webp/sneak500.webp'
import bakugo500 from "../../images/webp/bakugo500.webp"
import kakashi500 from "../../images/webp/kakashi500.webp"
import korrasami500 from "../../images/webp/korrasami500.webp"

import bazaar from '../../images/webp/bazaar.webp'
import benice from '../../images/webp/be-nice.webp'
import evangelion from '../../images/webp/evangelion.webp'
import oversized from '../../images/webp/oversized.webp'
import relatable from '../../images/webp/relatable.webp'
import underwood from '../../images/webp/underwood.webp'
import giyu from '../../images/webp/giyu.webp'
import giyu2 from '../../images/webp/giyu2.webp'
import heatwave from '../../images/webp/heat.webp'
import icyhot from '../../images/webp/icy-hot.webp'
import order from '../../images/webp/order.webp'
import skullface from '../../images/webp/skull.webp'
import sneak from '../../images/webp/sneak.webp'
import bakugo from "../../images/webp/bakugo.webp"
import kakashi from "../../images/webp/kakashi.webp"
import korrasami from "../../images/webp/korrasami.webp"

import CloseIcon from '@mui/icons-material/Close'



const Herocard = () => {
  let data=[
      {
          id:1,
          imgSrc:bazaar500,
          imgBig:bazaar,
          text:"bazaar"
      },
      {
          id: 2,
          imgSrc: benice500,
          imgBig: benice,
          text:"test"
      },
      {
          id: 3,
          imgSrc:oversized500,
          imgBig:oversized,
          text:"test"
      },
      {
        id: 4,
        imgSrc:evangelion500,
        imgBig:evangelion,
        text:"test"
      },
      {
        id: 5,
        imgSrc:relatable500,
        imgBig:relatable,
        text:"test"
      },
      {
        id: 6,
        imgSrc:underwood500,
        imgBig:underwood,
        text:"test"
      },
      {
        id: 11,
        imgSrc:giyu500,
        imgBig:giyu,
        text:"test"
      },
      {
        id: 12,
        imgSrc:giyu2500,
        imgBig:giyu2,
        text:"test"
      },
      {
        id: 13,
        imgSrc: heatwave500,
        imgBig: heatwave,
        text:"test"
      },
      {
        id: 14,
        imgSrc:icyhot500,
        imgBig:icyhot,
        text:"test"
      },
      {
        id: 15,
        imgSrc:order500,
        imgBig:order,
        text:"test"
      },
      {
        id: 17,
        imgSrc:skullface500,
        imgBig:skullface,
        text:"test"
      },
      {
        id: 18,
        imgSrc:sneak500,
        imgBig:sneak,
        text:"test"
      },
      {
        id: 19,
        imgSrc:korrasami500,
        imgBig:korrasami,
        text:"test"
      },{
        id: 20,
        imgSrc:kakashi500,
        imgBig: kakashi,
        text:"test"
      },{
        id: 21,
        imgSrc:bakugo500,
        imgBig:bakugo,
        text:"test"
      },
 
  ]
  
  const [model, setModel] = useState(false);
  const[tempimgSrc, setTempImgSrc] = useState('');

  const getImg=(imgBig)=>{
      setTempImgSrc(imgBig);
      setModel(true);
  }

  return(
      <>
      <div className= {model? "model open" : "model"}>
          <img src={tempimgSrc}/>
          <CloseIcon onClick={() => setModel(false)}/>
      </div>
      <div className="gallery">
          {data.map((item, index)=>{
              return(
                <div className='.heroContainer'>
                  <div className="pics" 
                  key={index} onClick={()=>
                      getImg(item.imgBig)
                  }>
                      <img src={item.imgSrc} style={{width:'100%', borderRadius:'.3rem',}} alt="test"/>
                  
                  </div>
                </div>
              )
          })}
      </div>
      </>
  )
}

export default Herocard;