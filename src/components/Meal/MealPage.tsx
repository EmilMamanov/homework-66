import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MealList from './MealList';
import MealForm from './MealForm';
import TotalCalories from '../TotalCalories/TotalCalories';
import axios from 'axios';

interface Meal {
    id: string;
    time: string;
    description: string;
    calories: number;
}



const MealPage: React.FC = () => {
    const navigate = useNavigate();

    const [showForm, setShowForm] = useState(false);
    const [selectedMealId, setSelectedMealId] = useState<string | null>(null);
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

    const handleAddMeal = () => {
        setShowForm(true);
        setSelectedMealId(null);
        navigate('/add-meal');
    };

    const handleEditMeal = (id: string) => {
        setShowForm(true);
        setSelectedMealId(id);
    };

    const handleFormClose = async () => {
        setShowForm(false);
        setSelectedMealId(null);
        await Promise.resolve();
    };

    return (
        <div>
            {showForm ? (
                <MealForm onAddMeal={handleFormClose} mealId={selectedMealId} />
            ) : (
                <div>
                    <MealList onEditMeal={handleEditMeal} meals={meals} />
                    <TotalCalories meals={meals} />
                    <button onClick={handleAddMeal}>Add Meal</button>
                </div>
            )}
        </div>
    );
};

export default MealPage;
