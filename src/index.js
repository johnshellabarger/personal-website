import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';



ReactDOM.render( 
    <ParallaxProvider>
    <App />
    </ParallaxProvider>, 
    document.getElementById('root')
);
