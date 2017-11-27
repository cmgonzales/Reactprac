import React from 'react';
import Testapp from './testApp.js';
import Bar from './nv.js';


class Main extends React.Component {
    
       render() {
          return (
            <div>
                <Bar/>  
               <Testapp/>
             
             </div>
          );
       }
    }
    
    export default Main;