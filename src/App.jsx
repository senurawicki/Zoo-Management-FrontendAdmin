import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './components/profile';
import Admin from './components/AllAdmins';
import Customer from './components/AllCustomers';
import Ticket from './components/AllTickets';
import Animals from './components/AllAnimals';
import AnimalSpecies from './components/AllAnimalSpecies';


function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/customers" element={<Customer />} />
                <Route path="/tickets" element={<Ticket />} />
                <Route path="/animals" element={<Animals />} />
                <Route path="/animalspecies" element={<AnimalSpecies />} />
            </Routes>
        </Router>
    );
}

export default App;