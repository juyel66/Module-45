import { useLoaderData } from "react-router-dom";
import UserData from "./UserData/UserData";


const Users = () => {
    const users = useLoaderData();
    // console.log(users)
    return (
        <div>

            <h1>I am a Users: {users.length} </h1>
           <div>
           {
                users.map(user=><UserData key={user.id} PropUser={user}></UserData>)
            }
           </div>
            
        </div>
    );
};

export default Users;