import React from 'react'
import classes from './Layout.module.css'
import Aux from '../HOC/Auxillary'

const Layout = (props) => {
    return (
        <Aux>
            <div className={classes.Layout}>
                {props.children}
            </div>
        </Aux>
       
    )
}

export default Layout