import React, { Component } from 'react'
import {get_last_key_from_localstorage, create_user} from '../bank_functionalities/bank_functions';


class CreateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: (get_last_key_from_localstorage()+1).toString(),
            username: '',
            balance: '',
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (e) => {

        /** Invoke create_user function */
        create_user(this.state);

        console.log(`${this.state.username} is registered succesfully`)
        
        this.setState({
            id: (get_last_key_from_localstorage()+1).toString(),
            username: '',
            balance: '',
        })
        e.preventDefault()
    }
    
    render() {
        return (
            <form className='createUserContainer' onSubmit={this.handleSubmit}>
                <h1>User Registration</h1>
                <label>username :</label> <input type="text" name='username' value={this.state.username} onChange={this.handleChange}/> <br />
                <label>balance :</label> <input type="number" name='balance'value={this.state.balance} onChange={this.handleChange}/> <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
 
export default CreateUser

//error handling - user exists/user does not exist
