export interface Meal {
    id: string;
    time: string;
    description: string;
    calories: number;
}

export interface MealListProps {
    meals: Meal[];
}