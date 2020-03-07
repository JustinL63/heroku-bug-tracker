import React from 'react'
import Aux from '../../Components/HOC/Auxillary'
//npm   import Bug from './Bug'

const Bugs = (props) => {

    return (
        <Aux>
            <h1>Bugs!!!</h1>
            <h2>{props.otherstuff}</h2>
            <p>{props.stuff}</p>

        </Aux>
    )
}

export default Bugs