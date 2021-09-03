import React, { Component } from 'react'

class CreateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            firstname: '',
            lastname: '',
            balance: '',
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (e) => {
        alert(`${this.state.username} is registered succesfully`)
        console.log(this.state);
        this.setState({
            firstname: '',
            lastname: '',
            balance: '',
        })
        e.preventDefault()
    }
    
    render() {
        return (
            <form className='createUserContainer' onSubmit={this.handleSubmit}>
                <h1>User Registration</h1>
                <label>firstname :</label> <input type="text" name='firstname' value={this.state.firstname} onChange={this.handleChange}/> <br />
                <label>lastname :</label> <input type="text" name='lastname' value={this.state.lastname} onChange={this.handleChange}/> <br />
                <label>balance :</label> <input type="number" name='balance'value={this.state.balance} onChange={this.handleChange}/> <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
 
export default CreateUser

//error handling - user exists/user does not exist
