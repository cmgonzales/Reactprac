import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import style from './style.css';

class mid extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
    slideNext=()=>{
      this.slider.slideNext();
    }
    slidePrev=()=>{
      this.slider.slidePrev();
    }
  
    _changeIcon=()=>{
      let {leftIcon,rightIcon}=this.state;
      if(leftIcon && rightIcon){
        this.setState({
          leftIcon:undefined,
          rightIcon:undefined
        });
      }
      else{
        this.setState({
          leftIcon:<span className="glyphicon glyphicon-glass"></span>,
          rightIcon:<span className="glyphicon glyphicon-music"></span>
        });
      }
    }
    render() {
      let {leftIcon,rightIcon}=this.state;
      return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={7000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r=>this.slider=r}
                className="carousel-fade"
              >
                <div className = 'carosel'>
                  <img
                    
                    src= {require('./mind.jpg')}
                  />
                  
                </div>
                <div className = 'carosel'>
                <img
                
                src= {require('./brave.jpg')}/>
                  </div>
                
                <div className = 'carosel'>
                <img
                
                src= {require('./nature.jpg')}/>
                </div>
                
                
              </React_Bootstrap_Carousel>
            </div>
          </div>
        </div>
      );
    }
};
export default mid;