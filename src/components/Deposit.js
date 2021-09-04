import { Component } from "react";
import {deposit, search_username} from '../bank_functionalities/bank_functions';
class Deposit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: '',
            username: ''
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
        /*
        let isDepositSuccess = deposit(this.state.username, this.state.amount);
        if(isDepositSuccess){
            console.log('Deposit successful!');
        } else {
            console.log('Username not found!');
        }
        */

        // look if the username exists
        let search_key = search_username(this.state.username);
        
        //if the username exists
        if(search_key !== null){
            deposit(this.state.username, this.state.amount);
        } else {
            //error handling: username does not exist
            alert("User does not exist!");
        }

        console.log(search_key);
        

        
        this.setState({
            amount: '',
            username: ''
            
        })
        event.preventDefault()
    }
    
    render() {
        return (
            <form className='depositContainer' onSubmit={this.handleSubmit}>
                <h1>Deposit</h1>
                <label>username</label> <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/> <br />
                <label>amount</label> <input type='number' name='amount' value={this.state.amount} onChange={this.handleChange}/> <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Deposit

//error handling - user exists/user does not exist