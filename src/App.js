import './App.css';
import React from 'react';
import Modal from './components/Modal';
import Deposit from './components/Deposit';
import Accounts from './components/Accounts';
import Withdraw from './components/Withdraw';
import Send from './components/Send';
import Sidebar from './components/Sidebar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';



function App() {
  //const [openModal, setOpenModal] = useState(false);
  return (
    <BrowserRouter>
      <div className='app'>
        
        <Sidebar />
        <Route path='/Deposit' component={Deposit} />
        <Route path='/Accounts' component={Accounts} />
        <Route path='/Withdraw' component={Withdraw} />
        <Route path='/Send' component={Send} />
        {/* <button className='openModalBtn' onClick={() => {setOpenModal(true)}}>Open</button> */}
        {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
      </div>
    </BrowserRouter>
  )
}

export default App
