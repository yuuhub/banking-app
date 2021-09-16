import { Component } from "react";
import {deposit, search_name} from '../bank_functionalities/bank_functions';

class Deposit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accountNo: '',
            amount: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this)
    }
   

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        // look if the name exists
        let search_key = search_name(this.state.accountNo);
        
        //if the name exists
        if(search_key !== null){
            deposit(this.state.accountNo, this.state.amount);
        } else {
            //error handling: name does not exist
            alert("User does not exist!");
        }
        
        this.setState({
            amount: '',
            accountNo: '',
            transactionType: 'deposit'
            
        })
        event.preventDefault()
    }

    //displaying new list depending on account type
    render() {
        return (
            <div className='grid-parent'>
                <div className='deposit-wrapper'>
                    <h1>Deposit</h1>
                    <form className='depositContainer' onSubmit={this.handleSubmit}>
                        <label>Account No.</label> <input type='number' min="1" name='accountNo' value={this.state.name} onChange={this.handleChange}/> <br />
                        <label>amount</label> <input type='number' min='1' name='amount' value={this.state.amount} onChange={this.handleChange}/> <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Deposit
