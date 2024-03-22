import { Link } from "react-router-dom";

const UserData = ({ PropUser }) => {
    console.log(PropUser)
    const { name, phone, username, website, email,id } = PropUser;
    const userStyle = {
        border: '2px solid red',
        padding: '10px',
        borderRadius: '20px',
        marginTop: '20px',

    }
    return (
        <div>

            <div style={userStyle}>
                <p>ID: {id}</p>
                <h2>Name: {name}</h2>
                <h2>User Name: {username}</h2>
                <h3>Phone Number: {phone}</h3>
                <h4>WebSite: {website}</h4>
                <h5>Email: {email}</h5>
                <Link to={`/users/${id}`}>Show Details</Link>
            </div>







        </div>
    );
};



export default UserData;