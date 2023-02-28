import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './App.css';
import CartContainer from './components/CartContainer';
import Nav from './components/nav';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';
  
function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals())
    localStorage.setItem('orderItem', JSON.stringify(data));
  }, [data]);
  // console.log(cartItems);


  return (
        <main>
          {isOpen && <Modal />}
          <Nav title={"買い物かご"}/>
          <CartContainer />
        </main>
  );
}

export default App;
