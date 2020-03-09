import React, { Component } from 'react'
import classes from './Login.module.css'
import { Form, Button } from 'react-bootstrap'
import axios from '../../axios-orders'



class Login extends Component {
  
    state = {
            email: '',
            password: '',
            isLoggedIn: false
    }

    componentDidMount() {
      console.log('componentdidmount login')
    }

    onChangeHandler = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    onSubmitHandler = (event) => {
      event.preventDefault()
      const user = {
        email:  this.state.email,
        password:  this.state.password
      }
      this.backendHandler(user)
      console.log(user)
    }

    backendHandler = (info) => {
      const userInfo = info
      axios.post('/user.json', userInfo)
    }
   
    render() {
        return (
            <div className={classes.Login}>
               <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email' onChange={this.onChangeHandler} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' onChange={this.onChangeHandler} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button onClick={this.onSubmitHandler} variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        )
    }
}

export default Login