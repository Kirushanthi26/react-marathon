import { useState } from "react";
import PostDetails from "./PostDetails";
import { fetchPosts } from "../../api/blogApi/blogApi";
import { useQuery } from "@tanstack/react-query";

const MAX_POST_PAGE = 10;

export type Post = {
    userID: number,
    id: number
    title: string,
    body: string
}

const Post = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    const { data: postList } = useQuery<Post[]>({
        queryKey: ["posts", currentPage],
        queryFn: () => fetchPosts(currentPage + 1),
    });

    if (!postList) return <div></div>

    return (
        <div>
            <ul>
                {postList.map((post) => (
                    <li
                        key={post.id}
                        className="m-2"
                        onClick={() => setSelectedPost(post)}
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
            <div className="my-5 flex justify-between items-center">
                <button disabled onClick={() => { }} className="bg-amber-300 p-3">
                    Previous page
                </button>
                <span>Page {currentPage + 1}</span>
                <button disabled onClick={() => { }} className="bg-amber-300 p-3">
                    Next page
                </button>
            </div>
            <hr />
            {selectedPost && <PostDetails post={selectedPost} />}
        </div >
    )
}

export default Post
