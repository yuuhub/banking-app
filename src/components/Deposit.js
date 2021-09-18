import { useState } from "react/cjs/react.development";
import {deposit, search_name} from '../bank_functionalities/bank_functions';
import '../css/forms.css'

const Deposit = () => {
    const [ accountNo, setAccountNo ] = useState('')
    const [ amount, setAmount ] = useState('')

    const handleSubmit = (e) => {
        let search_key = search_name(accountNo);

        if(search_key !== null){
            deposit(accountNo, amount);
        } else {
            alert("User does not exist!");
        }
        e.preventDefault();
    
    }

    return (
        <div className='deposit-wrapper'>
            <h1>Deposit</h1>
            <form className='form-container' onSubmit={handleSubmit}>
                {/* <label>Account No.</label>  */}
                <input id='acct-no-input' type='number' min="1" name='accountNo' placeholder='Account no.' onChange={e => setAccountNo(e.target.value)} />
                {/* <label>amount</label>  */}
                <input id='amount-input'  type='number' min='1' name='amount' placeholder='Amount' name='amount' onChange={e => setAmount(e.target.value)}/>
                <button id='submit-btn'>Deposit</button>
            </form>
        </div>
    
    )
}

export default Deposit

// class Deposit extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             accountNo: '',
//             amount: '',
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit= this.handleSubmit.bind(this)
//     }
   

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }

//     handleSubmit = (event) => {
        
//         let search_key = search_name(this.state.accountNo);
        
//         //if the name exists
//         if(search_key !== null){
//             deposit(this.state.accountNo, this.state.amount);
//         } else {
//             //error handling: name does not exist
//             alert("User does not exist!");
//         }

//         //console.log(search_key);
        
//         this.setState({
//             amount: '',
//             accountNo: '',
//             transactionType: 'deposit'
            
//         })
//         event.preventDefault()
//     }
    
//     render() {
//         return (
//             <div className='grid-parent'>
//                 <div className='deposit-wrapper'>
//                     <h1>Deposit</h1>
//                     <form className='depositContainer' onSubmit={this.handleSubmit}>
//                         <label>Account No.</label> <input type='text' name='accountNo' value={this.state.name} onChange={this.handleChange}/> <br />
//                         <label>amount</label> <input type='number' min='1' name='amount' value={this.state.amount} onChange={this.handleChange}/> <br />
//                         <input type="submit" value="Submit" />
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Deposit
