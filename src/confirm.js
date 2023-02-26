import React from 'react';

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
                        <input type="text" />
                    </td>
                </tr>

                <tr>
                    <th>
                    <label htmlFor="address">住所</label>
                    </th>
                    <td>
                        <input type="text" />
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
                        <input type="radio" />
                    </td>
                </tr>
                </table>
            </form>
        </div>
    )
}
