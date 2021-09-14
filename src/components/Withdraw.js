import React, {useState} from 'react'
import {withdraw, search_name} from '../bank_functionalities/bank_functions'

const Withdraw = () => {
    const [ accountNo, setAccountNo ] = useState("");
    const [ amount, setAmount ] = useState("");

    const handleSubmit = (e) => {
        let search_key = search_name(accountNo);
        console.log(search_key);

        if(search_key !== null){
            withdraw(accountNo, amount);
        } else {
            alert("User does not exist!");
        }

        e.preventDefault();
    }

    return (
        <div>
            <h1>Withdraw</h1>
            <form onSubmit={handleSubmit}>
                <label>Account No.</label>
                <input type="text" onChange={e => setAccountNo(e.target.value)} />
                <label>Amount</label>
                <input type="number" onChange={e => setAmount(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Withdraw
