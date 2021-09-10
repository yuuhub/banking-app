import './App.css';
import { useState } from 'react';
import React from 'react';
// import CreateUser from './components/CreateUser';
import Modal from './components/Modal';
import Deposit from './components/Deposit';
import Accounts from './components/Accounts'
import Sidebar from './components/Sidebar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'




function App() {

  //const [openModal, setOpenModal] = useState(false);
  return (
    <BrowserRouter>
      <Sidebar />
      <div className='App'>

        <Route path='/Deposit' component={Deposit} />
        <Route path='/Accounts' component={Accounts} />
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

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {openModal= false}
//     this.handleChange = this.handleChange.bind(this);
//   }
  
//   handleChange(event) {
//     this.setState({
//        openModal= true
//     });
//   }

//   render() {
//     return (
//       <div className='App'>
//         <CreateUser />
//         <button className='openModalBtn' onClick={() => {setOpenModal(true)}}>Open</button>
//         {openModal && <Modal closeModal={setOpenModal}/>}
//       </div>
//     )
//   }
// }

// export default App