import React from 'react'
import { useSelector } from 'react-redux'
import { CartIcon } from '../HeroIcons'

const Nav = () => {
  const { amount } = useSelector((store) => store.cart)

  return (
    <nav>
        <div className='nav-center'>
            <h3>買い物かご</h3>
            <div className="nav-container">
                <CartIcon />
                <div className="amount-container">
                    <p className='total-amount'>{amount}</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav
