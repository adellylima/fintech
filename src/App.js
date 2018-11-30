
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';
import List from './components/List/List';
import Header from './components/Header/Header';
import HomeScreen from './screen/HomeScreen/HomeScreen';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ToastContainer/>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path='/' component={HomeScreen} />
              <Route exact path='/add' component={Add} />
              <Route path='/edit/:id' component={Edit} />
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;