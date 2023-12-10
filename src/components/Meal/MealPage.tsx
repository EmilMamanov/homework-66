import React from 'react';
import Layout from '../Layout/Layout';
import MealList from '../Meal/MealList';

import {Meal} from "../../types";

const MealPage: React.FC = () => {
    const meals: Meal[] = [
        { id: '1', time: 'Breakfast', description: 'Eggs', calories: 300 },
        { id: '2', time: 'Lunch', description: 'Chicken Salad', calories: 500 },
    ];

    return (
        <Layout>
            <h2>Total Calories: {meals.reduce((total, meal) => total + meal.calories, 0)} kcal</h2>
            <button>Add new meal</button>
            <MealList meals={meals} />
        </Layout>
    );
};

export default MealPage;