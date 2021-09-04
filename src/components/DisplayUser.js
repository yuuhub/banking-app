import { useState } from "react";
import UserTable from "./UserTable";
import { list_users } from "../bank_functionalities/bank_functions";
import UserForm from "./UserForm";

const DisplayUser = () => {
    const getUsers = (accountType) => {
        let userData = [];
        userData = list_users(userData);
        
        if (accountType)
            return userData.filter(user => user.accountType === accountType)
        return userData;
    }

    const [users, setUsers] = useState(getUsers())
    
    const handleAccountTypeChange = (e) => {
        const newUserList = getUsers(e.target.value)
        setUsers(newUserList)
    }

    const handleDeleteUser = (id) => {
        const newUserList = users.filter(user => user.id !== id)
        setUsers(newUserList)
    }


    return (
        <div>
            <UserForm users={users} setUsers={setUsers}/>
            <UserTable users={users} onAccountTypeChange={handleAccountTypeChange} onDeleteUser={handleDeleteUser}/>
        </div>
        
    )
}

export default DisplayUser