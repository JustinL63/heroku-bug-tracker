import React from 'react'
import Aux from '../../HOC/Auxillary'
import {Jumbotron, Button, Row, Col, Nav} from 'react-bootstrap'


const Welcome = (props) => (
    <Aux>
        <Row>
            <Col></Col>
            <Col>
            <Jumbotron>
            <h1>Welcome to Bug Tracker!!!</h1>
            <p>
             This is a task manager to keep track of bugs you need to manager.
             It will help you label, describe, and monitor your progress on bug
             that need your attention!
            </p>
            <p>
                  <Nav.Link href='/login'>
                  <Button variant="primary">
                    Lets Get Started
                    </Button>
                  </Nav.Link>
                

            </p>
        </Jumbotron>
            </Col>
            <Col></Col>
        </Row>
    </Aux>
)


export default Welcome