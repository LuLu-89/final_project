import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Data from './components/Data';
import Calendar from './components/Calendar/Calendar';

import TestTable from './components/months/july';

import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';


class App extends Component {
  onDayClick = (e, day) => {
    alert(day);
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav class="navbar navbar-light bg-light justify-content-end">
            <form class="form-inline">
              <button class="btn btn-outline-success" type="button"><Link to='/'>Home</Link></button>
              <button class="btn btn-sm btn-outline-second" type="button"><Link to='/data'>Data</Link></button>
              <button class="btn btn-sm btn-outline-third" type="button"><Link to='/calendar'>Calendar</Link></button>
            </form>
          </nav>

          <div style={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center"
          }}>



            <Route exact path='/' component={Home} />

            <Route path='/data' component={Data} />
            <Route path='/calendar' component={Calendar} />

          </div>

        </div>
      </BrowserRouter>
    );
  }
}
// < Route exact path='/' render={(Select) => <Home {...Select} />} />

export default App;
