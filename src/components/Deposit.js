import { Component } from "react";
import {deposit, search_name} from '../bank_functionalities/bank_functions';

class Deposit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: '',
            name: '',
            transactionType: 'deposit'
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
        
       //let isDepositSuccess = deposit(this.state.name, this.state.amount);
        // if(isDepositSuccess){
        //     console.log('Deposit successful!');
        // } else {
        //     console.log('name not found!');
        // }
        
        // look if the name exists
        let search_key = search_name(this.state.name);
        
        //if the name exists
        if(search_key !== null){
            deposit(this.state.name, this.state.amount);
        } else {
            //error handling: name does not exist
            alert("User does not exist!");
        }

        //console.log(search_key);
        
        this.setState({
            amount: '',
            name: '',
            transactionType: 'deposit'
            
        })
        event.preventDefault()
    }

    //displaying new list depending on account type
   

    
    render() {
        return (
            <div>
                <h1>Deposit</h1>
                <form className='depositContainer' onSubmit={this.handleSubmit}>
                <label htmlFor='transactionType'>transaction type</label>
                <select name='transactionType' onChange={e=>this.handleChange(e)} id='transactionType' required>
                    <option value='deposit'>deposit</option>
                </select>
                    <label>name</label> <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/> <br />
                    <label>amount</label> <input type='number' min='1' name='amount' value={this.state.amount} onChange={this.handleChange}/> <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Deposit
