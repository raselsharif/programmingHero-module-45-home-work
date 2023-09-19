import { useLoaderData, useNavigate } from "react-router-dom";


const HomeMeals = () => {
    const lists = useLoaderData();
    return (
        <div>
            <h2 className="text-4xl my-4 text-center">Home Meals</h2>
            <div className='grid grid-cols-4 gap-4 mt-6 '>
                {
                    lists.meals.map(list => <List key={list.idMeal} list={list}></List>)
                }
            </div>
        </div>
    );
};

const List = ({ list }) => {
    const { strMealThumb, strMeal, idMeal } = list;
    const navigate = useNavigate();

    const handleMealDetails = () => {
        navigate(`/homeMealDetails/${idMeal}`)
    }
    return (
        <div>
            <img className='w-full' src={strMealThumb} alt="meal image" />
            <p onClick={handleMealDetails} className='text-center text-2xl mt-3 cursor-pointer hover:text-green-400'>{strMeal}</p>
        </div>
    )
}
export default HomeMeals;