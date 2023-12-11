import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MealForm from './MealForm';
import axios from 'axios';

import { Meal } from "../../types";

const EditMealPage: React.FC = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState<Meal>({ id: '', time: '', description: '', calories: 0 });

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await axios.get(`https://emil-mamanov-js-20-calories-default-rtdb.europe-west1.firebasedatabase.app/meals/${id}.json`);
                setMeal(response.data);
            } catch (error) {
                console.error('Error fetching meal:', error);
            }
        };

        if (id) {
            fetchMeal();
        }
    }, [id]);

    const handleUpdateMeal = async () => {
        try {
            await axios.put(`https://emil-mamanov-js-20-calories-default-rtdb.europe-west1.firebasedatabase.app/meals/${id}.json`, meal);
        } catch (error) {
            console.error('Error updating meal:', error);
        }
    };

    return (
        <div>
            <h2>Edit Meal</h2>
            <MealForm onAddMeal={handleUpdateMeal} initialMeal={meal} />
        </div>
    );
};

export default EditMealPage;
