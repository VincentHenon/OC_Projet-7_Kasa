import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
                <Routes fallback={<Page404 />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/logements/:id" element={<Logement />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
