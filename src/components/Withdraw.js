import React from 'react'
import {withdraw, search_name} from '../bank_functionalities/bank_functions'

const Withdraw = () => {
    handleSubmit = (e) => {
        console.log("Submitted");
        e.preventDefault();
    }

    return (
        <div>
            <h1>Withdraw</h1>
            <form onSubmit={handleSubmit}>
                <label>Account No.</label>
                <input type="text" />
                <label>Amount</label>
                <input type="number" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Withdraw
