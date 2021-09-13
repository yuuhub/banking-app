import React, { useEffect, useState } from 'react'

const AddUserForm = ({users, setUsers }) => {
    const [user, setUser] = useState(null)


    //used for creating object's keys.
    const get_last_key_from_localstorage = () => {
        return `user${localStorage.length + 1}`;
    }

    //saving users to the local storage
    useEffect(() => {
        if(user !== null) {
            localStorage.setItem(get_last_key_from_localstorage(), JSON.stringify(user)); 
        }
    },[users])
    

    const handleChange = (e) => {
        const newUser = {...user};
        const newUser = {
            ...user, 
            accountNo: (localStorage.length + 1).toLocaleString('en-US', {
                minimumIntegerDigits: 5,
                useGrouping: false
              })
        };
        newUser[e.target.name.toLowerCase()] = e.target.value.toLowerCase();
        setUser(newUser)
    }

    //pushes the new created user to users list
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
        <div className='adduser-wrapper'>
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