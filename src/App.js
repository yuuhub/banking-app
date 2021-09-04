import './App.css';
import { Component, useState } from 'react';
import React from 'react';
import CreateUser from './components/CreateUser';
import Modal from './components/Modal';
import Deposit from './components/Deposit';
import DisplayUser from './components/DisplayUser'

function App() {

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='App'>
      <DisplayUser />
      <CreateUser />
      <Deposit />
      <button className='openModalBtn' onClick={() => {setOpenModal(true)}}>Open</button>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
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