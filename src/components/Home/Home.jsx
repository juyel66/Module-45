import { Outlet } from "react-router-dom";
import Header from "../Header/Header";




const Home = () => {
    return (
        <div>

            
            
          
            
            <h1 className="text-4xl text-red-600">This is a home components</h1>
            <Header></Header>
        <Outlet></Outlet>
    

            
        </div>
    );
};

export default Home;