import { useState } from "react";
import UserTable from "./UserTable";
import { list_users } from "../bank_functionalities/bank_functions";
import AddUserForm from "./AddUserForm";
import '../css/addAcctModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Accounts = () => {
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState('');
    //this function holds users list and returns users 
    const getUsers = (search) => {
        let userData = [];
        userData = list_users(userData);
        if (search)
            return userData.filter(user => user.name === search)
        return userData;
    }

    const handleSearch = (e) => {
        const newSearchList = getUsers(e.target.value)
        setSearch(newSearchList)
        setUsers(newSearchList)
    }

    //initial state of users list
    const [users, setUsers] = useState(getUsers())   

    //displaying new list depending on account type
    const handleAccountTypeChange = (e) => {
        const newUserList = getUsers(e.target.value)
        setUsers(newUserList)
    }
    
    //deleting a user object using its ID
    const handleDeleteUser = (id) => {
        const newUserList = users.filter(user => user.id !== id)
        setUsers(newUserList)
    }

    return (
        <div className='acct-wrapper'>
            <h1 className='title'>Accounts</h1>
            <input id='search-input' name='searchName' type='text' placeholder='Search' onChange={handleSearch}/>
            <button id='add-acct-btn' onClick={() => {setOpenModal(true)}}>Add Account</button>
            {openModal && <AddUserForm users={users} setUsers={setUsers} openModal={openModal} setOpenModal={setOpenModal}/>}
            <UserTable users={users} onAccountTypeChange={handleAccountTypeChange} onDeleteUser={handleDeleteUser}/>
        </div>
    )
}

export default Accounts