import React, { Component } from 'react'
import classes from './Bugs.module.css'

class Bugs extends Component {

    state = {
        bug: {
            bugName: '',
            bugDescription: ''
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitHandler = (event) => {
       let bug = {
           bugName: this.state.bugName,
           bugDescription: this.state.bugDescription
       }
       
        console.log(bug)
        event.preventDefault()
    }

    render() {
        return (
            <div className={classes.Bugs}>
                <form>
                    <label>Bug Title</label>
                    <input
                        onChange={this.onChangeHandler} 
                        type='text' 
                        placeholder='Bug Title'
                        name='bugName'/>
                    <label>Bug Description</label>
                    <textarea
                        onChange={this.onChangeHandler}
                        type='text'
                        placeholder='Please Describe the Bug'
                        name='bugDescription'/>
                    <button onClick={this.onSubmitHandler}>Add the Bug</button>
                </form>

            </div>
        )
    }
}

export default Bugs