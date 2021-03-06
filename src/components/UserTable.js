import { numberWithCommas } from '../bank_functionalities/utils'
import '../css/usertable.css'


const UserTable = ({users}) => {
    
    return (    
        <div className='usertable-wrapper'>
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
                            <td id='accountNo-data'>{user.accountNumber}</td>
                            <td id='name-data'>{user.name.toUpperCase()}</td>
                            <td id='balance-data'>{numberWithCommas(user.balance)}</td>
                            <td id='date-data'>{user.dateCreated}</td>
                            {/* <td>{user.accountType}</td> */}
                            {/* <td><button onClick={() => onDeleteUser(user.id)}>delete</button></td> */}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    )
}

export default UserTable