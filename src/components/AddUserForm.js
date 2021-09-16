import React, { useEffect, useState } from 'react'
import '../css/addAcctModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const AddUserForm = ({users, setUsers, openModal, setOpenModal }) => {
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
        <div className='modal-background'>
            <div id='modal-wrapper'>
                <form id='add-acct-form' onSubmit={e=>handleAddAccount(e, user)}>
                    <button id='x-btn'onClick={() => setOpenModal(false)}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></button>
                    <div id='name-container'>
                        <label htmlFor='name'>Name</label>
                        <input onChange={e=>handleChange(e)} type='text' name='name' id='name' required />
                    </div>
                    <div id='balance-container'>
                        <label htmlFor='balance'>Balance</label>
                        <input onChange={e=>handleChange(e)} type='number' name='balance' id='balance' required />
                    </div>
                    <div id='buttons'>
                        <button id='cancel-btn' onClick={() => setOpenModal(false)}>Cancel</button>
                        <button id='add-acct-submit-btn'type='submit'>Add Account</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AddUserForm