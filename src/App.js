import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import CartContainer from './components/CartContainer';
import Nav from './components/nav';
import { calculateTotals, getItems } from './features/cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems]);
  console.log(cartItems);

  return (
    <main>
      {isOpen && <Modal />}
      <Nav />
      <CartContainer />
    </main>
  );
}

export default App;
