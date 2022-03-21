import React, {useState} from 'react'
import './herocard.css'
import bazaar from '../../images/bazaar.jpg'
import benice from '../../images/be-nice.jpg'
import evangelion from '../../images/evangelion.jpg'
import oversized from '../../images/oversized.jpg'
import relatable from '../../images/relatable.jpg'
import underwood from '../../images/underwood.jpg'
import giyu from '../../images/giyu.jpg'
import giyu2 from '../../images/giyu2.jpg'
import heatwave from '../../images/heat.png'
import icyhot from '../../images/icy-hot.jpg'
import order from '../../images/order.jpg'
import skullface from '../../images/skull.png'
import sneak from '../../images/sneak.jpg'
import CloseIcon from '@mui/icons-material/Close'
import bakugo from "../../images/bakugo.jpg"
import kakashi from "../../images/kakashi.jpg"
import korrasami from "../../images/korrasami.jpg"


const Herocard = () => {
  let data=[
      {
          id:1,
          imgSrc:bazaar,
          text:"bazaar"
      },
      {
          id: 2,
          imgSrc: benice,
          text:"test"
      },
      {
          id: 3,
          imgSrc:oversized,
          text:"test"
      },
      {
        id: 4,
        imgSrc:evangelion,
        text:"test"
      },
      {
        id: 5,
        imgSrc:relatable,
        text:"test"
      },
      {
        id: 6,
        imgSrc:underwood,
        text:"test"
      },
      {
        id: 11,
        imgSrc:giyu,
        text:"test"
      },
      {
        id: 12,
        imgSrc:giyu2,
        text:"test"
      },
      {
        id: 13,
        imgSrc: heatwave,
        text:"test"
      },
      {
        id: 14,
        imgSrc:icyhot,
        text:"test"
      },
      {
        id: 15,
        imgSrc:order,
        text:"test"
      },
      {
        id: 17,
        imgSrc:skullface,
        text:"test"
      },
      {
        id: 18,
        imgSrc:sneak,
        text:"test"
      },
      {
        id: 19,
        imgSrc:korrasami,
        text:"test"
      },{
        id: 20,
        imgSrc:kakashi,
        text:"test"
      },{
        id: 21,
        imgSrc:bakugo,
        text:"test"
      },
 
  ]
  
  const [model, setModel] = useState(false);
  const[tempimgSrc, setTempImgSrc] = useState('');

  const getImg=(imgSrc)=>{
      setTempImgSrc(imgSrc);
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
                      getImg(item.imgSrc)
                  }>
                      <img src={item.imgSrc} style={{width:'100%', borderRadius:'.3rem',}}/>
                  
                  </div>
                </div>
              )
          })}
      </div>
      </>
  )
}

export default Herocard;