import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MealPage from './components/Meal/MealPage';
import MealForm from './components/Meal/MealForm';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MealPage />} />
                <Route path="/add-meal" element={<MealForm />} />
            </Routes>
        </Router>
    );
};

export default App;