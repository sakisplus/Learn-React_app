import PostList from './PostList';
import useFetch from './useFetch';

const Homepage = () => {

    const { data: posts, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="homenavbar">
            { error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {posts && <PostList posts={ posts } title="All posts" />}
        </div>
    );
}

export default Homepage;