import React from 'react'
import '../css/usertable.css'


const UserTable = ({users, onAccountTypeChange, onDeleteUser}) => {
    
    return (
        <div className='grid-parent'>
            <div className='usertable-wrapper'>
                <select onChange={e => onAccountTypeChange(e)} className='accountType' id='accountType'>
                    <option value=''>ALL</option>
                    <option value='active'>active</option>
                    <option value='inactive'>inactive</option>
                </select>
                <table className='usertable-container'>
                    <thead className='thead-container'>
                        <tr className='tr-container'>
                            <th id='accountNumber'> Account No. </th>
                            <th id='accountName'> Account Name </th>
                            <th id='balance'> Balance </th>
                            <th id='dateCreated'> Date Created </th>

                            {/* <th id='delete'> delete </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => <tr key={user.id}>
                                <td id='accountNumber-data'>{user.accountNumber}</td>
                                <td id='name-data'>{user.name}</td>
                                <td id='balance-data'>{user.balance}</td>
                                <td id='date-data'>{user.dateCreated}</td>
                                {/* <td>{user.accountType}</td> */}
                                <td><button onClick={() => onDeleteUser(user.id)}>delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserTable