import { Link } from "react-router-dom";

const NotFound = ( { posts, title } ) => {

    return (
        <div className="no-found">
            <h2>Sorry</h2>
            <p>Not found</p>
            <Link to="/">Back to home page...</Link>
        </div>
    );
}

export default NotFound;