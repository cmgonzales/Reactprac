import React from 'react';
import Mid from './mid.js';
import Bar from './nv.js';
import Bottom from './Bottom.js';
import Style from './style.css'
import Create from './create.js'

class Main extends React.Component {
    
       render() {
          return (
            <div>
                <Bar/>  
               <Mid/>
             <Bottom/>
            <create/>             
             </div>
          );
       }
    }
    
    export default Main;