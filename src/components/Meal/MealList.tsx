import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';

interface Meal {
    id: string;
    time: string;
    description: string;
    calories: number;
}

interface MealListProps {
    onEditMeal: (id: string) => void;
    meals: Meal[];
}

const MealList: React.FC<MealListProps> = ({ onEditMeal }) => {
    const [meals, setMeals] = useState<Meal[]>([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axios.get('https://emil-mamanov-js-20-calories-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
                const mealsData = response.data;
                const mealsArray: Meal[] = Object.keys(mealsData).map((key) => ({
                    id: key,
                    ...mealsData[key],
                }));
                setMeals(mealsArray);
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };

        (async () => {
            await fetchMeals();
        })();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`https://emil-mamanov-js-20-calories-default-rtdb.europe-west1.firebasedatabase.app/meals/${id}.json`);
            setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== id));
        } catch (error) {
            console.error('Error deleting meal:', error);
        }
    };

    return (
        <div>
            <h2>Meal List</h2>
            {meals.map((meal) => (
                <div className="meal-element" key={meal.id}>
                    <div>Time: {meal.time}</div>
                    <div>Description: {meal.description}</div>
                    <div>Calories: {Number(meal.calories)} kcal</div>
                    <button className="edit-btn" onClick={() => onEditMeal(meal.id)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(meal.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default MealList;
