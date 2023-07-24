import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navsection from './components/Heading/Navsection.jsx'
import Footersection from './components/Footer/Footersection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex flex-col'>   
    <Navsection/> 
      <App />
      <Footersection/>
    </div>
  </React.StrictMode>,
)
