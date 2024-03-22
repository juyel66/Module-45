import { Link } from "react-router-dom";


const Header = () => {
    const style_style = {
        color: 'red',

    }
    return (
        <div>
            <h1 style={style_style}>This is a navbar</h1>
            <nav style={style_style}>

                {/* <link to="/">Home</link>
                <link to="/About">About us</link>
                <link to="/Contact">Contact us</link> */}

                <div>
                    <Link to="/">Home</Link> <br />
                    <Link to="/About">About us</Link> <br />
                    <Link to="/Contact">Contact us</Link> <br />
                    <Link to="/users">Users</Link> <br />   
                    <Link to="/post">Post</Link>
                </div>



            </nav>

        </div>
    );
};

export default Header;