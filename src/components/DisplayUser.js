import { useState } from "react";
import UserTable from "./UserTable";


const DisplayUser = () => {
    
    //list of accounts
    const getUsers = (accountType) => {
        const userData = [
            {
                id: 4,
                username: 'leannpanopio',
                balance: 500,
                accountType: 'active'
            },
            {
                id: 2,
                username: 'meghanwatson',
                balance: 500,
                accountType: 'active'
            },
            {
                id: 3,
                username: 'tatertot',
                balance: 500,
                accountType: 'inactive'
            },
        ]

        if (accountType)
            return userData.filter(user => user.accountType === accountType)
        return userData;
    }

    const [users, setUsers] = useState(getUsers())
    const [user, setUser] = useState({})
    
    const handleAccountTypeChange = (e) => {
        const newUserList = getUsers(e.target.value)
        setUsers(newUserList)
    }

    const handleDeleteUser = (id) => {
        const newUserList = users.filter(user => user.id !== id)
        setUsers(newUserList)
    }

    const handleChange = (e) => {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
    }

    const handleAddAccount = (e) => {
        e.preventDefault();
        const newList = [...users];
        user.id=50;
        newList.push(user);
        setUsers(newList)
    }

    return (
        <div>
            <h1>Add account</h1>
            <form onSubmit={e=>handleAddAccount(e)}>
                <label htmlFor='accountType'>account type</label>
                <select name='accountType' id='accountType' required>
                    <option></option>
                    <option value='active'>active</option>
                    <option value='inactive'>inactive</option>

                </select>
                <label htmlFor='username'>username</label>
                <input onChange={e=>handleChange(e)} type='text' name='username' id='username' required />

                <label htmlFor='balance'>balance</label>
                <input onChange={e=>handleChange(e)} type='number' name='balance' id='balance' required />

                <button type='submit'>add account</button>
            </form>
            <UserTable users={users} onAccountTypeChange={handleAccountTypeChange} onDeleteUser={handleDeleteUser}/>
        </div>
        
    )
}

export default DisplayUser