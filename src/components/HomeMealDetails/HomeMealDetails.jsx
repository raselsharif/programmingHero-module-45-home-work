import { useLoaderData, useNavigate } from "react-router-dom";


const HomeMealDetails = () => {
    const homeMealDetails = useLoaderData()
    return (
        <div>
            <h2 className='text-4xl text-center'>Meal Details</h2>
            <div>
                {
                    homeMealDetails.meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

const Meal = ({ meal }) => {
    // console.log(meal);
    const { strInstructions, strMeal, idMeal } = meal;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className="text-center mt-4">
            <h2 className="text-2xl bg-green-600 py-3 inline-block px-3 rounded-xl ">Id: {idMeal}</h2>
            <h3 className="border-2 py-3 px-4 my-3 text-2xl">{strMeal}</h3>
            <p className="bg-slate-800 py-4 px-5 text-lg">{strInstructions}</p>
            <button onClick={handleGoBack} className="bg-green-600 py-3 px-4 rounded-lg mt-4 hover:bg-green-700">Go Back</button>
        </div>
    )
}

export default HomeMealDetails;