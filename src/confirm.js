export default function Confirm () {

    return (
        <div className='cart'>
            <hr />
            <form action="submit" className='info'>
                <table>
                <tr>
                    <th>
                        <label htmlFor="name">お名前</label>
                    </th>
                    <td>
                        <input type="text" className='name'/>
                    </td>
                </tr>

                <tr>
                    <th>
                    <label htmlFor="address">住所</label>
                    </th>
                    <td>
                        <textarea name="" id="" cols="33" rows="5"></textarea>
                    </td>
                </tr>

                <tr>
                    <th>
                        <label htmlFor="">お届け日時</label>
                    </th>
                    <td>
                        <input type="date" />
                    </td>
                </tr>

                <tr>
                    <th>
                        <label htmlFor="pay">お支払い方法</label>
                    </th>
                    <td>
                        <select name="pay" id="pay-select">
                            <option value="">--お支払い方法の選択--</option>
                            <option value="card">クレジットカード</option>
                            <option value="bank">銀行振込</option>
                            <option value="convenience">コンビニ支払い</option>
                        </select>
                    </td>
                </tr>
                </table>
                <hr />
                <button type='submit' className='btn submit-btn'>購入する</button>
            </form>
    
        </div>
    )
}
