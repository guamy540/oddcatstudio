import './Imagecarousel.css'
import React from 'react'
import C1 from "../../images/HeroCarousel/C1.gif"
import C2 from "../../images/HeroCarousel/C2.gif"
import C3 from "../../images/HeroCarousel/C3.gif"
import C4 from "../../images/HeroCarousel/C4.gif"
import C5 from "../../images/HeroCarousel/C5.gif"
import {useNavigate} from "react-router-dom"


class Imagecarousel extends React.Component {

  
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
          currentImage: 0,
          images: [
            C1, C2, C3, C4, C5
          ]
        };
      }
    
      switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
          this.setState({
            currentImage: this.state.currentImage + 1
          });
        } else {
          this.setState({
            currentImage: 0
          });
        }
        return this.currentImage;
      }
    
      componentDidMount() {
        setInterval(this.switchImage, 9000);
      }
    

      render() {
    
        

        return (
          <div className="slideshow-container">
            
            <img className="slideshow-images"
              src={this.state.images[this.state.currentImage]}
              alt="promotional images"
            />
          </div>
        );
      }
    }

export default Imagecarousel
