import React from 'react';
import './App.css';
import Login from './Containers/Login/Login'
import Navbar from './Components/Navigation/Navbar'
import Layout from './Components/Layout/Layout'
import Bug from './Containers/Bugs/Bug'
import Bugs from './Containers/Bugs/Bugs'
import { Route } from 'react-router-dom'
import Welcome from '../src/Components/UI/Welcome/Welcome'

function App() {
  return (
    <div className="container.fluid">
      <Layout>
        <Navbar/>
        <Route path='/' exact component={Welcome}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/bugs' exact component={Bugs}/>
        <Route path = '/bug' exact component={Bug}/>
      </Layout>
      
    </div>
  );
}

export default App;
