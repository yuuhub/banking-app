import React, { useEffect, useState } from 'react'

const AddUserForm = ({users, setUsers }) => {
    //this is the initial state of the user for creation
    const [user, setUser] = useState(null)

    function get_last_key_from_localstorage() {
        return localStorage.length + 1;
    }

    useEffect(() => {
        if(user !== null) {
            localStorage.setItem(get_last_key_from_localstorage(), JSON.stringify(user)); 
        }
    },[users])
    
    const handleChange = (e) => {
        const newUser = {...user};
        newUser[e.target.name.toLowerCase()] = e.target.value.toLowerCase();
        setUser(newUser)
    }

    //this function pushes the new created user to users list
    const handleAddAccount = (e) => {
        e.preventDefault();
        const { name } = user;
        if (!users.some((user) => user.name === name)){
            //create_user(user);
            const newUserList = [...users];
            newUserList.push(user);
            setUsers(newUserList);
        } else {
            alert("user already exists");
        }
    }

    return (
        <div>
            <h1>Add account</h1>
            <form onSubmit={e=>handleAddAccount(e, user)}>
                <label htmlFor='name'>Name</label>
                <input onChange={e=>handleChange(e)} type='text' name='name' id='name' required />
                <label htmlFor='balance'>Balance</label>
                <input onChange={e=>handleChange(e)} type='number' name='balance' id='balance' required />

                <button type='submit'>add account</button>
            </form>
        </div>
    )
}

export default AddUserForm