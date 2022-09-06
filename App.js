import React from 'react';
import Home from './Home';
import Login from './Login'
import Register from './Register' 
import HotelBooking from './HotelBooking'
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';      
import Search from './Search';

function App() {
  return (

    <div className="App">

      <Router>
           <Switch>

           <Route exact path='/'><Home/> </Route>
           <Route exact path='/home'><Home/></Route>
           <Route exact path='/Login'><Login/></Route>
           <Route exact path='/Register'><Register/> </Route>
           <Route exact path='/HotelBooking'><HotelBooking/> </Route>
           <Route exact path='/Search'><Search/> </Route>
         



          </Switch>
      </Router>
    

    </div>

  );
}

export default App;
