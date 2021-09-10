import { Component } from "react";
import {deposit, search_name} from '../bank_functionalities/bank_functions';

class Deposit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: '',
            name: ''
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
            name: ''
            
        })
        event.preventDefault()
    }
    
    render() {
        return (
            <form className='depositContainer' onSubmit={this.handleSubmit}>
                <h1>Deposit</h1>
                <label>name</label> <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/> <br />
                <label>amount</label> <input type='number' min='1' name='amount' value={this.state.amount} onChange={this.handleChange}/> <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Deposit
