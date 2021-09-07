import React, { useState } from 'react'
import { create_user } from "../bank_functionalities/bank_functions";
import { getCurrentDate } from '../bank_functionalities/utils';

const AddUserForm = ({users, setUsers, }) => {
    //this is the initial state of the user for creation
    const [user, setUser] = useState({})
    
    const handleChange = (e) => {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
        //could be that number becomes a string when it is typed after a string value
        // if(isNaN(newUser[e.target.name] = e.target.value)) {
        //     setUser(newUser)
        // } else {
        //     console.log('username cannot start with a number')
        // }
        console.log(newUser)
    }

    //this function pushes the new created user to users list
    const handleAddAccount = (e) => {
        e.preventDefault();

        create_user(user);
        const newUserList = [...users];
        newUserList.push(user);
        setUsers(newUserList);

        // const { accountNumber } = user;
        // if (!users.some((user) => user.accountNumber === accountNumber)){
        //   create_user(user);
        //   const newUserList = [...users];
        //   newUserList.push(user);
        //   setUsers(newUserList);
        // } else {
        //   alert("user already exists");
        // }

        // if (users.some((user) => user.username !== user.username)) {

    }

    return (
        <div>
            <h1>Add account</h1>
            <form onSubmit={e=>handleAddAccount(e, user)}>
                {/* <label htmlFor='accountType'>account type</label>
                <select name='accountType' onChange={e=>handleChange(e)} id='accountType' required>
                    <option></option>
                    <option value='active'>active</option>
                    <option value='inactive'>inactive</option>
                </select> */}
                <label htmlFor='firstname'>First Name</label>
                <input onChange={e=>handleChange(e)} type='text' name='firstname' id='firstname' required />
                <label htmlFor='lastname'>Last Name</label>
                <input onChange={e=>handleChange(e)} type='text' name='lastname' id='lastname' required />
                <label htmlFor='balance'>Balance</label>
                <input onChange={e=>handleChange(e)} type='number' name='balance' id='balance' required />

                <button type='submit'>add account</button>
            </form>
        </div>
    )
}

export default AddUserForm


