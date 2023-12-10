export interface Meal {
    time: string;
    description: string;
    calories: number;
}

export interface MealListProps {
    meals: Meal[];
}