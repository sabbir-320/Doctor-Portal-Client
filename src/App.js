import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppointmentPage from './Components/AppointmentPage/AppointmentPage';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import AppointmentList from './Components/Dashboard/AppointmentList/AppointmentList';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/HomePage/Home';
import Login from './Components/LoginPage/Login';
import PrivateRoute from './Components/LoginPage/PrivateRoute';

export const userContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <AppointmentPage></AppointmentPage>
          </Route >
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/appointmentList">
            <AppointmentList></AppointmentList>
          </Route>
          <Route path="/addDoctor">
          <AddDoctor></AddDoctor>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
