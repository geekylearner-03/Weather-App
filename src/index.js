import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WeatherAppProvider from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <WeatherAppProvider>
        <App />
    </WeatherAppProvider>
  
);
