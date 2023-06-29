import { Link } from "react-router-dom";

const PostList = ( { posts, title } ) => {

    return (
        <div className="post-list">
            <h1>{ title }</h1>
            { posts.map((post) => (
                <div className="post-preview" key={post.id}>
                    <Link to={ `/blogs/${post.id}` }>
                        <h2>{ post.title }</h2>
                    </Link>
                    <p>Written by { post.author }</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;