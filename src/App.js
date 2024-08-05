import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TrainSearch from './components/TrainSearch';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';
import './App.css';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [role, setRole] = useState(localStorage.getItem('role') || '');

    useEffect(() => {
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
    }, [token, role]);

    return (
        <Router>
            <Switch>
                <Route path="/login" exact>
                    <Login setToken={setToken} setRole={setRole} />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
                <Route path="/search" render={() => (token ? <TrainSearch /> : <Redirect to="/login" />)} />
                <Route path="/admin" render={() => (token && role === 'admin' ? <AdminPage token={token} /> : <Redirect to="/login" />)} />
                <Route path="/user" render={() => (token ? <UserPage token={token} /> : <Redirect to="/login" />)} />
                <Redirect from="/" to="/login" />
            </Switch>
        </Router>
    );
};

export default App;
