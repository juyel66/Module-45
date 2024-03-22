import { Link, useNavigate } from "react-router-dom";


const Posts = ({propData}) => {
    const {id, body, title} = propData;
    const userStyle = {
        border: '2px solid red',
        padding: '10px',
        borderRadius: '20px',
        marginTop: '20px',

      

    }
    const navigate = useNavigate();

    const handleShowDetails = ()=>{
        navigate(`/post/${id}`)
            
    }
    return (
        <div style={userStyle}>
            <h2>ID: {id}</h2>
            <h3>{title}</h3>
            <h4>{body}</h4>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleShowDetails}>Show Details</button>
            
        </div>
    );
};

export default Posts;