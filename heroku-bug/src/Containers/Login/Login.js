import React, { Component } from 'react'
import classes from './Login.module.css'

class Login extends Component {

    state = {
        user: {
            email: '',
            password: ''
        },
        isLoggedIn: false
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        this.setState({
           isLoggedIn: true
        })
        console.log(this.state.email + " " + this.state.password + ' ' + this.state.isLoggedIn )
        event.preventDefault()
    }

    LoginHandler = () => {
        this.setState({
            isLoggedIn: true
        })
    }



    render() {
        return (
            <div className={classes.Login}>
                <form>
                    <label 
                        placeholder='Email'
                        >Email</label>
                    <input
                        onChange={this.onChangeHandler} 
                        type='text' 
                        name='email'/>
                    <label 
                         placeholder='Password' 
                    >Password</label>
                    <input
                        onChange={this.onChangeHandler} 
                        type='password' 
                        name='password'/>
                <button onClick={this.onSubmitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login