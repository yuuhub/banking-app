import { useState } from "react";
import UserTable from "./UserTable";
import { list_users } from "../bank_functionalities/bank_functions";
import AddUserForm from "./AddUserForm";
import '../css/addAcctModal.css';

const Accounts = () => {
    const [openModal, setOpenModal] = useState(false);
    //this function holds users list and returns users 
    const getUsers = (accountType) => {
        let userData = [];
        
        userData = list_users(userData);
        
        if (accountType)
            return userData.filter(user => user.accountType === accountType)
        return userData;
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
            <button id='add-acct-btn' onClick={() => {setOpenModal(true)}}>add account</button>
            {openModal && <AddUserForm users={users} setUsers={setUsers} openModal={openModal} setOpenModal={setOpenModal}/>}
            <UserTable users={users} onAccountTypeChange={handleAccountTypeChange} onDeleteUser={handleDeleteUser}/>
        </div>
    )
}

export default Accounts