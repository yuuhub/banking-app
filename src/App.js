import './App.css';
import React from 'react';
import Deposit from './components/Deposit';
import Accounts from './components/Accounts';
import Withdraw from './components/Withdraw';
import Send from './components/Send';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import { useState } from 'react'
import AddUserForm from './components/AddUserForm';



function App() {
  // const [openModal, setOpenModal] = useState(false);
  return (
    <BrowserRouter>
      <div className='app'>
        <Sidebar />
        <Switch>
          <Route path='/Deposit' component={Deposit} />
          <Route path='/Accounts' component={Accounts} />
          <Route path='/Withdraw' component={Withdraw} />
          <Route path='/Send' component={Send} />
          {/* <button className='openModalBtn' onClick={() => {setOpenModal(true)}}>Open</button> */}
          {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
        </Switch>
        {/* {<AddUserForm users={users} setUsers={setUsers}/>} */}
      </div>
    </BrowserRouter>
  )
}

export default App
