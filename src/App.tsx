import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MealPage from './components/Meal/MealPage';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import MealForm from "./components/Meal/MealForm.tsx";
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <NavigationComponent />
                <Routes>
                    <Route path="/" element={<MealPage />} />
                    <Route path="/add-meal" element={<MealForm onAddMeal={() => {}} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;