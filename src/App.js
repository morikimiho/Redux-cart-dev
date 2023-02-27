import { createContext, useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import './App.css';
import CartContainer from './components/CartContainer';
import Nav from './components/nav';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import Confirm from './confirm';
import { store } from './store';

  
function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems]);
  console.log(cartItems);


  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <main>
          {isOpen && <Modal />}
          <Nav title={"買い物かご"}/>
          <CartContainer />
        </main>
        }/>
        <Route path="/confirm" element={
          <>
            <Nav title={"購入確認"}/>
            <Confirm/>
          </>}
         />
      </Routes>
    </Router>

  );
}

export default App;
