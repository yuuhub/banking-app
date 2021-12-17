import './App.css';
import React from 'react';
import Deposit from './components/Deposit';
import Accounts from './components/Accounts';
import Withdraw from './components/Withdraw';
import Send from './components/Send';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  // const [openModal, setOpenModal] = useState(false);
  return (
    <HashRouter>
      <div className='app'>
        <Sidebar />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          {/* <Route path='/Dashboard' component={Dashboard} /> */}
          <Route path='/Deposit' component={Deposit} />
          <Route path='/Accounts' component={Accounts} />
          <Route path='/Withdraw' component={Withdraw} />
          <Route path='/Send' component={Send} />
          {/* <button className='openModalBtn' onClick={() => {setOpenModal(true)}}>Open</button> */}
          {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
        </Switch>
        {/* {<AddUserForm users={users} setUsers={setUsers}/>} */}
      </div>
    </HashRouter>
  )
}

export default App
