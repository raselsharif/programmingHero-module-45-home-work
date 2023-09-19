
import { useLoaderData } from 'react-router-dom';

const Catagories = () => {
    const catagories = useLoaderData()
    return (
        <div>
            <h2 className="text-4xl my-4 text-center">Catagories</h2>
            <div className='grid grid-cols-4 gap-4 mt-6 '>
                {
                    catagories.categories.map(catagorie => <Catagorie key={catagorie.idCategory} catagorie={catagorie}></Catagorie>)
                }
            </div>
        </div>
    );
};

const Catagorie = ({ catagorie }) => {
    const { strCategory, strCategoryThumb } = catagorie;
    console.log(catagorie);
    return (
        <div className='border-2 p-4 overflow-hidden'>
            <img className='w-full hover:scale-125 transition-all' src={strCategoryThumb} alt="meal image" />
            <p className='text-center text-2xl mt-3 cursor-pointer hover:text-green-400'>{strCategory}</p>
        </div>
    )
}

export default Catagories;