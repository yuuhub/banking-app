import React, {useState} from 'react'
import { search_name, send } from '../bank_functionalities/bank_functions';
import '../css/forms.css'

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
            alert('successful transaction')
            setSender('');
        }
        else {
            alert('One or both account numbers do not exist');
        }
    }

    return (
        <div>
            <h1 className='title'>Send</h1>
            <form className='form-container' onSubmit={handleSend}>
                {/* <label>Sender</label> */}
                <input id='acct-no-input' type="text" min='1' placeholder='Sender Account No.' onChange={e => setSender(e.target.value)} />
                {/* <label>Recipient</label> */}
                <input id='acct-no-input' type='text' min='1' placeholder='Recipient Account No.' onChange={e => setRecipient(e.target.value)} />
                {/* <label>Amount</label> */}
                <input id='amount-input' type="number" min='1' placeholder='Amount' onChange={e => setAmount(e.target.value)}/>
                <button id='submit-btn'>Send</button>
            </form>

        </div>
    )
}

export default Send
