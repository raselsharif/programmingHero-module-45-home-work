import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const All = () => {
    const all = useLoaderData();
    // console.log(all);
    return (
        <div>
            <h2 className='text-center text-3xl mt-4'>All Meals</h2>
            <div className='grid grid-cols-4 gap-4 mt-6 '>
                {
                    all.meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

const Meal = ({ meal }) => {
    const { strMealThumb, strMeal, idMeal } = meal;
    const navigate = useNavigate()
    const handleMealDetails = () => {
        navigate(`/details/${idMeal}`)
    }
    console.log(meal);
    return (
        <div className='border-2 p-4'>
            <img className='w-full' src={strMealThumb} alt="meal image" />
            <p onClick={handleMealDetails} className='text-center text-2xl mt-3 cursor-pointer hover:text-green-400'>{strMeal}</p>
        </div>
    )
}
export default All;