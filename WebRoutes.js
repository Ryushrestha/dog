import React from 'react'
import { Routes,Route} from 'react-router-dom'
import App from './src/App'

const WebRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}/>
    </Routes>
  )
}

export default WebRoutes