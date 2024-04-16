import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import TemperatureInput from './chapter_12/Temperature';
import Calculator from './chapter_12/Calculator';
// import NotificationList from './chapter_06/NotificationList';
// import ConfirmButton from './chapter_08/ConfirmButton';
// import Accommodate from './chapter_07/Accommodate';
// import Toolbar from './chapter_09/Toolbar';
// import LandingPage from './chapter_09/LandingPage';
// import AttendanceBook from './chapter_10/AttendanceBook';
// import SignUp from './ch/apter_11/SignUp';
// import Library from './chapter_03/Library';
// import Clock from './chapter_04/Clock';
// import CommentList from './chpater_05/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));

 
  root.render(
    <React.StrictMode>
      <Calculator/>
    </React.StrictMode>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 