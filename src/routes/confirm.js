import { useState } from 'react';
import axios from 'axios';

export default function Confirm () {
    const [itemState, setItemState] = useState(localStorage.getItem('orderItem'));
    const cartItem = JSON.parse(itemState);
    const [orderName, setOrderName] = useState("");
    const [address, setAddress] = useState("");
    const [deliverDate, setDeliverDate] = useState("");
    const [payMethod, setPayMethod] = useState("");
    if(!cartItem) return "購入が完了しました。こちらのブラウザを閉じてください";

    async function handleSubmit(e) {
        e.preventDefault();

        const orderContent = {
            cartItem: cartItem.cartItems,
            orderName: orderName,
            address: address,
            deliverDate: deliverDate,
            payMethod: payMethod,
        }
        await axios.post('http://localhost:8000/order', orderContent)
        .then((res) => res)
        .then(localStorage.clear())
        .catch((error) => console.log(error))

    }

    return (
        <>
        <nav>
        <div className='nav-center'>
            <h3>購入確認</h3>
            <div className="nav-container">
            </div>
        </div>
         </nav>
       <div className='cart'>
            <hr />
            <form action="submit" className='info' onSubmit={handleSubmit}>
                <table>
                <tr>
                    <th>
                        <label htmlFor="name">お名前</label>
                    </th>
                    <td>
                        <input type="text" className='name' value={orderName} onChange={(e) => setOrderName(e.target.value)}/>
                    </td>
                </tr>

                <tr>
                    <th>
                    <label htmlFor="address">住所</label>
                    </th>
                    <td>
                        <textarea name="" id="" cols="33" rows="5" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                    </td>
                </tr>

                <tr>
                    <th>
                        <label htmlFor="">お届け日時</label>
                    </th>
                    <td>
                        <input type="date" value={deliverDate} onChange={(e) => setDeliverDate(e.target.value)}/>
                    </td>
                </tr>

                <tr>
                    <th>
                        <label htmlFor="pay">お支払い方法</label>
                    </th>
                    <td>
                        <select name="pay" id="pay-select" value={payMethod} onChange={(e) => setPayMethod(e.target.value)}>
                            <option value="">--お支払い方法の選択--</option>
                            <option value="card">クレジットカード</option>
                            <option value="bank">銀行振込</option>
                            <option value="cvs">コンビニ支払い</option>
                        </select>
                    </td>
                </tr>
                </table>

                <hr />
                <div className="cart-total">
                    <h4>
                        合計 <span>{cartItem.total}円</span>
                    </h4>
                </div>
                <button type="submit" className='btn submit-btn' value="Submit">購入する</button>
            </form>
    
        </div>
        </>
    )
}
