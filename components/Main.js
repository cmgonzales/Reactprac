import React from 'react';
import Testapp from './testApp.js';
import Bar from './Navbar.js';
import { Navbar } from 'reactstrap';

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