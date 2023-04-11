import {BrowserRouter, Routes , Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';

import './App.css';
import Signup from './pages/Signup';

import { CartProvider } from './context/CartContext';

import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';


function App() {
  return (

    <CartProvider>
      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Signup/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/myorders' element={<MyOrders/>} />

        </Routes>


      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
