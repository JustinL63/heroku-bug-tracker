import React from "react"
import { Navbar, Nav} from 'react-bootstrap'

const NavBar = (props) => {
  return (

      
          <Navbar bg="dark" variant="dark">

            <Navbar.Brand href="/">Home</Navbar.Brand>

            <Nav className="mr-auto" >

            <Nav.Link href="/bugs">Bugs</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/bug">Bug</Nav.Link>
            </Nav>



</Navbar>
      
    
      
    

  )
}



export default NavBar



