import { useState, useEffect } from "react";
import { get } from "../../service/mockapi";
import { Post } from "../../components"

export default function Posts() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await get();
        setPosts(response);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <div className="p-12 w-full lg:w-2/4 m-auto">
                {posts.length > 0 &&
                    posts.map((post) => <Post key={post.id} post={post} />)}
            </div>
        </>
    );
}