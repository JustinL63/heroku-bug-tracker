import React from 'react';
import './App.css';
import Login from './Containers/Login/Login'
import Navbar from './Components/Navigation/Navbar'
import Layout from './Components/Layout/Layout'
import Bug from './Containers/Bugs/Bug'
import Bugs from './Containers/Bugs/Bugs'

function App() {
  return (
    <div className="container.fluid">
      <Layout>
        <Navbar/>
        <Login/>
        <Bug/>
        <Bugs/>
      </Layout>
      
    </div>
  );
}

export default App;
