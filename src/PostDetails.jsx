import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";



const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post
    return (
        <div>
            <h1>ID: {id} </h1>
            <h2>{title}</h2>
            <h3>{body}</h3>
            
            
        </div>
    );
};

export default PostDetails;