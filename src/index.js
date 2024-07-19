import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Volume from './Demo/Volume';
// import Circle from './Demo/Circle.js'
// import Tic from './Demo/Tic';
// import Flex from './Demo/Flex';
// import Car from './Car/Car.js'
// import Mobile from './mobile/Mobile';
import Aaa from './Demo/Aaa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Troubleshooting /> */}
    {/* <App /> */}
    {/* <Car /> */}
    {/* <Circle /> */}
    {/* <PopUp /> */}
    {/* <Box /> */}
    {/* <Volume /> */}
    {/* <Tic /> */}
    {/* <Flex /> */}
    {/* <Mobile /> */}
    <Aaa />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
