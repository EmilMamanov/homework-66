import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const NavigationComponent: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-meal">Add Meal</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationComponent;
