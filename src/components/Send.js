import React, {useState} from 'react'
import { search_name, send } from '../bank_functionalities/bank_functions';


const Send = () => {
    const [ sender, setSender ] = useState("");
    const [ recipient, setRecipient ] = useState("");
    const [ amount, setAmount ] = useState("");

    const handleSend = (event) => {
        event.preventDefault();
        
        const senderKey = search_name(sender);
        const recipientKey = search_name(recipient);

        console.log(senderKey, recipientKey);

        if(senderKey && recipientKey) {
            send(senderKey, recipientKey, amount);
        }
        else {
            alert('One or both account numbers does not exist');
        }
    }

    return (
        <div>
            <h1 className='title'>Send</h1>
            <form onSubmit={handleSend}>
                <label>Sender Account No.</label>
                <input type="number" min="1" onChange={e => setSender(e.target.value)} />
                <label>Recipient Account No.</label>
                <input type="number" min="1" onChange={e => setRecipient(e.target.value)} />
                <label>Amount</label>
                <input type="number" min="1" onChange={e => setAmount(e.target.value)} />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Send
