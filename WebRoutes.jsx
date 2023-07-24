import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import App from './src/App'
import Products from './src/Products'
import Home from './src/Home'
import PetCollection from './src/PetCollection'

const WebRoutes = () => {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/pet' element={<PetCollection/>}/>
    </Routes>
    </Router>
  )
}

export default WebRoutes