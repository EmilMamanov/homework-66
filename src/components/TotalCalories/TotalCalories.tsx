import React from 'react';

import { Meal } from "../../types";

interface TotalCaloriesProps {
    meals: Meal[];
}

const TotalCalories: React.FC<TotalCaloriesProps> = ({ meals }) => {
    const totalCalories = meals.reduce((sum, meal) => sum + Number(meal.calories), 0);

    return (
        <div>
            <h2>Total Calories: {totalCalories} kcal</h2>
        </div>
    );
};

export default TotalCalories;