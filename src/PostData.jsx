import { useLoaderData } from "react-router-dom";
import Posts from "./Posts";


const PostData = () => {
    const postsData = useLoaderData();
    return (
        <div>
            <h1>Post: {postsData.length} </h1>
            {
                postsData.map(item => <Posts key={item.id} propData={item}></Posts>)
            }
            
        </div>
    );
};

export default PostData;