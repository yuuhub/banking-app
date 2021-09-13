import React, {useState} from 'react'
import {withdraw, search_name} from '../bank_functionalities/bank_functions'

const Withdraw = () => {
    const [ accountNo, setAccountNo ] = useState("");
    const [ amount, setAmount ] = useState("");
    const [ transactionType ] = useState("withdrawal");

    const handleSubmit = (e) => {
        console.log(accountNo, amount);
        e.preventDefault();
    }

    return (
        <div>
            <h1>Withdraw</h1>
            <form onSubmit={handleSubmit}>
                <label>Account No.</label>
                <input type="text" onChange={e => setAccountNo(e.target.value)} />
                <label>Amount</label>
                <input type="number" onChange={e => setAmount(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Withdraw
