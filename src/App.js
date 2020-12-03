import React from 'react';

import {Switch, Route, Link} from 'react-router-dom';

import TopHeader from "./components/Header/TopHeader";
import Header from "./components/Header/Header";
import Navebar from "./components/nave/Navebar";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const App = () => (
    <div className="App">
        <TopHeader/>
        <Header/>
        <Navebar/>
        <Switch>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/register">
                <Register/>
            </Route>
            <Route exact path="/">
                <Home/>
            </Route>
        </Switch>
    </div>
);

export default App;
