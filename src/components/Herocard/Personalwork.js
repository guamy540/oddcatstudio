import React, {useState} from 'react'
import './herocard.css'
import cat from '../../images/cat.gif'
import doodles from '../../images/Doodles.gif'
import self from '../../images/self.jpg'
import spacepup from '../../images/space-pup.jpg'
import CloseIcon from '@mui/icons-material/Close'
import cat2 from "../../images/cat2.gif"
import current_ from "../../images/Current_.gif"
import gif1 from "../../images/gif1.gif"
import dealbreaker from '../../images/deal-breaker.jpg'
import gif_trunkz_ from '../../images/Gif_Trunkz_.gif'
import sokka from '../../images/sokka.jpg'


const Herocard = () => {
  let data=[
      {
        id: 1,
        imgSrc:spacepup,
        text:"test"
      },
      {
        id: 2,
        imgSrc:doodles,
        text:"test"
      },
      {
        id: 3,
        imgSrc:self,
        text:"test"
      },
      {
        id: 4,
        imgSrc:cat,
        text:"test"
      },
      {
        id: 5,
        imgSrc:cat2,
        text:"test"
      },
      {
        id: 6,
        imgSrc:current_,
        text:"test"
      },
      {
        id: 7,
        imgSrc:gif1,
        text:"test"
      },
      {
        id: 8,
        imgSrc:dealbreaker,
        text:"test"
      },
      {
        id: 10,
        imgSrc:gif_trunkz_,
        text:"test"
      },     
      {
        id: 19,
        imgSrc:sokka,
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
/*place after item.imgSrc and change to herocardtest.css */
//<div className='testcaption'>
//<h4 classname="text">{item.text}</h4>
//</div>
export default Herocard
