import React, {useState} from 'react'
import {withdraw, search_name} from '../bank_functionalities/bank_functions';


const Send = () => {
    const [ sender, setSender ] = useState("");
    const [ recipient, setRecipient ] = useState("");
    const [ amount, setAmount ] = useState("");

    const handleSend = () => {
        const senderKey = search_name(sender);
        const recipientKey = search_name(recipient);

        if(senderKey && recipientKey) {
            // send function here
        }
        else {
            alert('One or both account numbers are invalid.');
        }
    }

    return (
        <div>
            <form onSubmit={handleSend}>
                <label>Sender</label>
                <input type="text" onChange={e => setSender(e.target.value)} />
                <label>Recipient</label>
                <input type="text" onChange={e => setRecipient(e.target.value)} />
                <label>Amount</label>
                <input type="number" onChange={e => setAmount(e.target.value)} />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Send
