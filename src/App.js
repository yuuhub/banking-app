import './App.css';
import { useState } from 'react';
import React from 'react';
// import CreateUser from './components/CreateUser';
import Modal from './components/Modal';
import Deposit from './components/Deposit';
import Accounts from './components/Accounts';
import Withdraw from './components/Withdraw';
import Sidebar from './components/Sidebar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//import { FreeDictionary } from './FreeDictionary';



function App() {
  //const [openModal, setOpenModal] = useState(false);
  return (
    <BrowserRouter>
      <Sidebar />

      <div className='app'>
        {/* <FreeDictionary /> */}
        <Route path='/Deposit' component={Deposit} />
        <Route path='/Accounts' component={Accounts} />
        <Route path='/Withdraw' component={Withdraw} />
        {/* <Sidebar /> */}
        {/* <Deposit />
        <DisplayUser /> */}
        {/* <CreateUser /> */}
      
        {/* <button className='openModalBtn' onClick={() => {setOpenModal(true)}}>Open</button> */}
        {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
      </div>
    </BrowserRouter>
  )
}

export default App
