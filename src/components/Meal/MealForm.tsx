import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Meal } from "../../types";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import '../../MealForm.css';

interface MealFormProps {
    onAddMeal: () => Promise<void>;
    mealId?: string | null;
    initialMeal?: Meal;
}

const MealForm: React.FC<MealFormProps> = ({ onAddMeal, mealId, initialMeal }) => {
    const [meal, setMeal] = useState({ time: '', description: '', calories: 0 });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (initialMeal) {
            setMeal(initialMeal);
        } else if (mealId) {
            const fetchMeal = async () => {
                try {
                    const response = await axios.get(`https://emil-mamanov-js-20-calories-default-rtdb.europe-west1.firebasedatabase.app/meals/${mealId}.json`);
                    setMeal(response.data);
                } catch (error) {
                    console.error('Error fetching meal:', error);
                }
            };

            (async () => {
                await fetchMeal();
            })();
        }
    }, [mealId, initialMeal]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setMeal((prevMeal) => ({ ...prevMeal, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            if (mealId) {
                await axios.put(`https://emil-mamanov-js-20-calories-default-rtdb.europe-west1.firebasedatabase.app/meals/${mealId}.json`, meal);
            } else {
                await axios.post('https://emil-mamanov-js-20-calories-default-rtdb.europe-west1.firebasedatabase.app/meals.json', meal);
            }
            await onAddMeal();
            navigate('/');
        } catch (error) {
            console.error('Error saving meal:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>{mealId ? 'Edit Meal' : 'Add Meal'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Time:</label>
                    <select id="time" name="time" value={meal.time} onChange={handleChange} required>
                        <option value="">Select time</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                    </select>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={meal.description} onChange={handleChange} />
                </div>
                <div>
                    <label>Calories:</label>
                    <input type="number" name="calories" value={meal.calories} onChange={handleChange} />
                </div>
                <button className="save-btn" type="submit" disabled={loading}>
                    {loading ? <LoaderSpinner /> : 'Save Meal'}
                </button>
                <button type="button" onClick={handleCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default MealForm;
