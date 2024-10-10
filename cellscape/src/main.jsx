import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Jost',
  defaultRadius: 'md',
  colors:{
    brand:['#E71300','#2B2D42','#8D99AE','#EF233C', '#EDF2F4']
  }
});




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <MantineProvider theme={theme}>
       <App />
       </MantineProvider>
    </BrowserRouter>
 
  </React.StrictMode>,
)