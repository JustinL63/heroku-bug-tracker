import React, { Component } from 'react'
import classes from './Login.module.css'
import axios from '../../AxiosInstance'

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
        let user = { email: this.state.email, password: this.state.password}
        this.setState({
           isLoggedIn: true
        })
        this.onPostHandler()
        console.log(user)
        event.preventDefault()
       
    }

    LoginHandler = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    onPostHandler = () => {
        axios.post('/user', {
            email: this.state.email,
            password: this.state.password
        })
        .then(function (response) {
            console.log(response)
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
                <button onClick={this.onPostHandler}>Axios Test</button>
                </form>
            </div>
        )
    }
}

export default Login