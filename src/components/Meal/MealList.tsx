import React from 'react';

import {Meal} from "../../types";

interface MealListProps {
    meals: Meal[];
}

const MealList: React.FC<MealListProps> = ({ meals }) => {
    return (
        <div>
            {meals.map((meal) => (
                <div key={meal.id} className="meal-item">
                    <div>{meal.time}</div>
                    <div>{meal.description}</div>
                    <div>{meal.calories} kcal</div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default MealList;