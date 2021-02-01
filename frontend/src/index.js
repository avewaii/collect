import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
//import 'bootswatch/dist/cyborg/bootstrap.min.css'

axios.interceptors.request.use(function (config) {
    config.headers.Authorization = localStorage.getItem("sessionID");
    return config;
});

axios.interceptors.response.use((response) => response, (error) => {
    if (error && error.response && error.response.status === 401) {
        localStorage.removeItem("sessionID")

        if (window.location !== "/auth" && window.location !== "/registration") {
            window.location = "/auth"
        }
    }
    throw error;
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
