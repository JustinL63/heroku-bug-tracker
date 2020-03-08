import React, { Component } from 'react'
import Aux from '../../Components/HOC/Auxillary'
import axios from '../../axios-orders'

class Bugs extends Component {

    //this component pull the previously made bugs from the backend

    state = {
        bugList: null,
        allBugs: null
    }



    
    fetchBugsHandler = () => {
        //this function gets the json info from firebase
        axios.get('/bugs.json')
        .then(response => {
            console.log(response)
            
        })
       
       
    }
    setDataHandler = (info) => {
        //this function takes the response and puts it into usable data
        const newBugList = Object.keys(info)
        .map(bugKey => {
            return info[bugKey]
        })
        this.setState({
            allBugs: newBugList
        })
        console.log(newBugList)


    }

    updatedBugsHandler = () => {
        //this function will update the list of bugs

    }
    


    render() {
        return (
            <Aux>
                <h1>Bugs!!!</h1>
        <p></p>
                <button onClick={this.setDataHandler}>Set Data Handler</button>
                <button onClick={this.fetchBugsHandler}>Get Bugs!!</button>
            </Aux>
        )
    }

   
}

export default Bugs