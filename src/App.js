import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./layout/Header"
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/404';
import Logement from './pages/Logement';
import Footer from './layout/Footer';
import "./sass/main.css";

function App() {
    return (
        <div className="body">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/logements/:id" component={Logement}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route component={Page404}></Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
