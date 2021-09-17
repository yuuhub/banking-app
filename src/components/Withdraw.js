import React, {useState} from 'react'
import {withdraw, search_name} from '../bank_functionalities/bank_functions'
import '../css/forms.css'

const Withdraw = () => {
    const [ accountNo, setAccountNo ] = useState("");
    const [ amount, setAmount ] = useState("");

    const handleSubmit = (e) => {
        let search_key = search_name(accountNo);

        if(search_key !== null){
            withdraw(accountNo, amount);
            alert('succesful transaction')
        } else {
            alert("User does not exist!");
        }
        e.preventDefault();
    }

    return (
        <div className='withdraw-wrapper'>
            <h1>Withdraw</h1>
            <form className='form-container'onSubmit={handleSubmit}>
                {/* <label id='acct-no-label'>Account No.</label> */}
                <input id='acct-no-input'type="number" min="1" placeholder='Account no.'onChange={e => setAccountNo(e.target.value)} />
                {/* <label id='amount-label'>Amount</label> */}
                <input id='amount-input' type="number" min="1" placeholder='Amount' onChange={e => setAmount(e.target.value)} />
                <button id='submit-btn'>Withdraw</button>
            </form>
        </div>
    )
}

export default Withdraw
