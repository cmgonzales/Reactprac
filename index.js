import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styleloader from 'style-loader';





import Main from './components/Main.js';


//using the react-dom render method, we access our html and
//attach our react app at this connection point
ReactDOM.render(<Main/>, document.getElementById('app'));
