import React, { Component } from 'react'
import classes from './Bugs.module.css'
import axios from '../../axios-orders'
import { Form, Button, Card} from 'react-bootstrap'

class Bug extends Component {

    state = {
        bug: {
            name: '',
            description: ''
        }
    }

    componentDidMount = () => {
        console.log('componentdidmount')
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.setState({
            bug: this.state
        })     
        this.componentDidMount()
          
    }

    backEndHandler = () => {
        const beetle = {
            name: this.state.name, 
            description:  this.state.description
        }
        axios.post('/bugs.json', beetle)

    }


    render() {
        return (
        <div className={classes.Bug}>
            <Card style={{ width: '50%' }}>
                <Form>
                    <Form.Group>
                        <Form.Label>Bug Title</Form.Label>
                        <Form.Control
                            otherstuff={this.state.name} 
                            type='text'
                            onChange={this.onChangeHandler}
                            name='name'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Bug Description</Form.Label>
                        <Form.Control
                            stuff={this.state.description} 
                            type='textarea'
                            onChange={this.onChangeHandler}
                            name='description'/>
                    </Form.Group>
                        <Button onClick={this.onSubmitHandler}>Submit the Bug</Button>
                        <Button onClick={this.backEndHandler}>Backend</Button>
                </Form>
            </Card>
            
        </div>
        )
    }
}

export default Bug