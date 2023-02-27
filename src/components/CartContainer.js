import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem' 
import { openModal } from '../features/modal/ModalSlice'

const CartContainer = () => {
    const dispatch = useDispatch();
    const { amount, cartItems, total } = useSelector((state) => state.cart)
    if (amount < 0) {
      return (
            <section classname="cart">
                <header>
                    <h4 className='empty-cart'>何も入っていません</h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
            <header>
                <hr />
            </header>
            <br />
            <br />
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item}/>
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        合計 <span>{total}円</span>
                    </h4>
                </div>
                <div className='btn-group'>
                    <button className='btn all-clear' onClick={() => dispatch(openModal())}>全削除</button>
                    <a href="/confirm"><button className='btn'>購入に進む →</button></a> 
                </div>
            </footer>
        </section>
    )
}

export default CartContainer
