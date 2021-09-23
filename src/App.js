import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import TopMenu from './components/TopMenu';
import HomePage from './pages/Home';
import CavitiesPage from './pages/Cavities';
import AppointmentsPage from './pages/Appointments';
import WhiteningPage from './pages/Whitening';
import './App.css';

function App() {
    return (
        <Router>
            <TopMenu/>

            <Switch>
                <Router exact path="/">
                    <HomePage/>
                </Router>

                <Router path="/gaatjes">
                    <CavitiesPage/>
                </Router>

                <Router path="/afspraak-maken">
                    <AppointmentsPage/>
                </Router>
                <Router path="tanden-bleken">
                    <WhiteningPage/>
                </Router>

            </Switch>
        </Router>
    );
}

export default App;
