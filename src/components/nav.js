import React from 'react'
import { useSelector } from 'react-redux'
import { BagIcon } from '../HeroIcons'

const Nav = () => {
  const { amount } = useSelector((store) => store.cart)

  return (
    <nav>
        <div className='nav-center'>
            <h3>買い物かご</h3>
            <div className="nav-container">
                <BagIcon />
                <div className="amount-container">
                    <p className='total-amount'>{amount}</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav
