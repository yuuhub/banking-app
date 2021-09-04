import React, { useState } from 'react'
import { create_user} from "../bank_functionalities/bank_functions";
const UserForm = ({users, setUsers}) => {

    const [user, setUser] = useState({})

    const handleChange = (e) => {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
    }

    const handleAddAccount = (e, user) => {
        /** add users to localStorage */
        e.preventDefault();
        /** add users to localStorage */
        //assign an ID to submitted data passed into variable named 'user'
        //use localStorage.length + 1 as ID:
        //use IDs as keys

        create_user(user);        
        const newUserList = [...users];
        newUserList.push(user);
        setUsers(newUserList)
    }


    return (
        <div>
            <h1>Add account</h1>
            <form onSubmit={e=>handleAddAccount(e, user)}>
                <label htmlFor='accountType'>account type</label>
                <select name='accountType' onChange={e=>handleChange(e)} id='accountType' required>
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
        </div>
    )
}

export default UserForm
