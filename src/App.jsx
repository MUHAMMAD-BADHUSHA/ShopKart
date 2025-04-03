
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Products from './Components/Products'
import Cart from './Components/Cart'
import Payment from './Components/Payment'
import Order from './Components/Order'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/payment" element={<Payment/>}/>
       < Route path="/order" element={<Order/>}/>
       <Route path='/homepage' element={<Homepage/>}/>
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
