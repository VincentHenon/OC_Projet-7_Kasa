import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Footer from './components/Footer/Footer';
import "./styles/styles.css";

function App() {
    return (
        <div className="body">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/Logement/:id" component={Logement}></Route>
                    <Route path="/About" component={About}></Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
