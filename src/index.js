import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import 'antd/dist/antd.min.css';
import "react-image-gallery/styles/css/image-gallery.css";
import 'react-tabs/style/react-tabs.css';
import 'react-vertical-timeline-component/style.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
