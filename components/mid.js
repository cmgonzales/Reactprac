import React from 'react';
import style from './style.css'
import { Carousel } from 'react-responsive-carousel';
//import default from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/reactstrap/lib/CardImg';

class mid extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src= {require('./mind.jpg')} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require('./mind.jpg')} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require('./mind.jpg')} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
export default mid;
