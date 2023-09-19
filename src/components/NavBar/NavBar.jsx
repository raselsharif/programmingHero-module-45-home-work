
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='text-center mt-4 flex justify-center gap-7'>
            <NavLink className="bg-black py-2 px-4 rounded-lg" to='/'>Home</NavLink>
            <NavLink className="bg-black py-2 px-4 rounded-lg" to='/all'>All</NavLink>
            <NavLink className="bg-black py-2 px-4 rounded-lg" to='/catagories'>Catagories</NavLink>
        </nav>
    );
};

export default NavBar;