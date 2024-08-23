import React from 'react';
import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init({offset: 150, duration: 600});

const root = ReactDom.createRoot(document.querySelector('#root'))
// root.render(<App/>)

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDom.hydrate(<App />, rootElement);
} else {
  root.render(<App/>)
}