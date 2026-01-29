import { useState } from "react";
import PostDetails from "./PostDetails";

const MAXPOSTPAGE = 10;

export type Post = {
    userID: number,
    id: number
    title: string,
    body: string
}

const Post = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    // replace with useQuery
    const data: Post[] = [];

    return (
        <div>
            <ul>
                {data.map((post) => (
                    <li
                        key={post.id}
                        className="post-title"
                        onClick={() => setSelectedPost(post)}
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
            <div className="pages">
                <button disabled onClick={() => { }}>
                    Previous page
                </button>
                <span>Page {currentPage + 1}</span>
                <button disabled onClick={() => { }}>
                    Next page
                </button>
            </div>
            <hr />
            {selectedPost && <PostDetails post={selectedPost} />}
        </div >
    )
}

export default Post
