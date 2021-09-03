import { Component } from "react";

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
       
        console.log(this.state);
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