import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Home = () => {
    const navigation = useNavigation()

    return (
        <>

            <div className="container mx-auto text-white">
                <h1 className="text-4xl my-4 text-center">Welcome to TheMealDB</h1>
                <p className="text-xl text-center max-w-3xl mx-auto">Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                    We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</p>
                <NavBar></NavBar>

                {
                    navigation.state === 'loading' ? <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-4xl text-red-500 bg-zinc-100 border-2 p-4">Loading...</h2> : <Outlet></Outlet>
                }


            </div>
        </>
    );
};


export default Home;