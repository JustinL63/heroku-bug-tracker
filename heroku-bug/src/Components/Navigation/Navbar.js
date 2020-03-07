import React from "react"

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#top">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#top">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#top">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#top">Pricing</a>
      </li>
    </ul>
  </div>
</nav>
            )
        }
        
        
                
        export default NavBar
            
        
        
