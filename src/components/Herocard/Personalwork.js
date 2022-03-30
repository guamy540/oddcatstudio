import React, {useState} from 'react'
import './herocard.css'
import self500 from '../../images/webp/self500.webp'
import spacepup500 from '../../images/webp/space-pup500.webp'
import dealbreaker500 from '../../images/webp/deal-breaker500.webp'
import sokka500 from '../../images/webp/sokka500.webp'
import cat500 from '../../images/webp/cat500.webp'
import doodles500 from '../../images/webp/doodles500.webp'
import cat2500 from '../../images/webp/cat2500.webp'
import current500 from '../../images/webp/current500.webp'
import trunkz500 from '../../images/webp/trunkz500.webp'
import shura500 from '../../images/webp/shura500.webp'

import self from '../../images/webp/self.webp'
import spacepup from '../../images/webp/space-pup.webp'
import dealbreaker from '../../images/webp/deal-breaker.webp'
import sokka from '../../images/webp/sokka.webp'
import cat from '../../images/webp/cat.webp'
import doodles from '../../images/webp/doodles.webp'
import cat2 from '../../images/webp/cat2.webp'
import current from '../../images/webp/current.webp'
import trunkz from '../../images/webp/trunkz.webp'
import shura from '../../images/webp/shura.webp'


import CloseIcon from '@mui/icons-material/Close'



const Herocard = () => {
  let data=[
      {
        id: 1,
        imgSrc:spacepup500,
        imgBig: spacepup,
        text:"test"
      },
      {
        id: 2,
        imgSrc:doodles500,
        imgBig: doodles,
        text:"test"
      },
      {
        id: 3,
        imgSrc:self500,
        imgBig: self,
        text:"test"
      },
      {
        id: 4,
        imgSrc:cat500,
        imgBig: cat,
        text:"test"
      },
      {
        id: 5,
        imgSrc:cat2500,
        imgBig: cat2,
        text:"test"
      },
      {
        id: 6,
        imgSrc:current500,
        imgBig: current,
        text:"test"
      },
      {
        id: 7,
        imgSrc:shura500,
        imgBig: shura,
        text:"test"
      },
      {
        id: 8,
        imgSrc:dealbreaker500,
        imgBig: dealbreaker,
        text:"test"
      },
      {
        id: 10,
        imgSrc:trunkz500,
        imgBig: trunkz,
        text:"test"
      },     
      {
        id: 19,
        imgSrc:sokka500,
        imgBig:sokka,
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
                      <img src={item.imgSrc} style={{width:'100%', borderRadius:'.3rem',}} alt={item.text}/>
                  
                  </div>
                </div>
              )
          })}
      </div>
      </>
  )
}
/*place after item.imgSrc and change to herocardtest.css */
//<div className='testcaption'>
//<h4 classname="text">{item.text}</h4>
//</div>
export default Herocard
