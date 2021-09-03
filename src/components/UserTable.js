import React from 'react'
import DisplayUser from './DisplayUser'

const UserTable = ({users, onAccountTypeChange, onDeleteUser}) => {
    return (
        <div>
            <select onChange={e => onAccountTypeChange(e)} className='accountType' id='accountType'>
                <option value=''>ALL</option>
                <option value='active'>active</option>
                <option value='inactive'>inactive</option>
            </select>
            <table>
                <thead>
                    <tr>
                        <th>account number </th>
                        <th>username </th>
                        <th>balance </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) =><tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.balance}</td>
                            <td>{user.accountType}</td>
                            <td><button onClick={() => onDeleteUser(user.id)}>delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserTable