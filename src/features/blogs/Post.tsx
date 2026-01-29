import { useEffect, useState } from "react";
import PostDetails from "./PostDetails";
import { deletePost, fetchPosts } from "../../api/blogApi/blogApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const MAX_POST_PAGE = 10;

export type Post = {
    userID: number,
    id: number
    title: string,
    body: string
}

const Post = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    const queryClient = useQueryClient()

    const deleteMutation = useMutation({
        mutationFn: (postId: number) => deletePost(postId)
    })

    const handleDeletePost = (postId: number) => {
        deleteMutation.mutate(postId);
    };

    useEffect(() => {
        if (currentPage < MAX_POST_PAGE) {
            const nextPage = currentPage + 1

            queryClient.prefetchQuery({
                queryKey: ["posts", nextPage],
                queryFn: () => fetchPosts(nextPage),
            })
        }

    }, [currentPage])

    const { data: postList, isLoading, isError, error } = useQuery<Post[]>({
        queryKey: ["posts", currentPage],
        queryFn: () => fetchPosts(currentPage),
        staleTime: 2000
    });

    if (isLoading) return <h2 className="text-3xl font-semibold">Post are Loading.....</h2>

    if (isError) return <p>{error.message}</p>

    if (!postList) return

    return (
        <div>
            <ul>
                {postList.map((post) => (
                    <li
                        key={post.id}
                        className="m-2"
                        onClick={() => {
                            deleteMutation.reset()
                            setSelectedPost(post)
                        }}
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
            <div className="my-5 flex justify-between items-center">
                <button disabled={currentPage <= 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)} className="bg-amber-300 p-3 disabled:bg-gray-200">
                    Previous page
                </button>
                <span>Page {currentPage}</span>
                <button disabled={currentPage >= MAX_POST_PAGE} onClick={() => setCurrentPage((prev) => prev + 1)} className="bg-amber-300 p-3">
                    Next page
                </button>
            </div>
            <hr />
            {selectedPost && <PostDetails post={selectedPost} deleteMutation={handleDeletePost} deleteMutationResult={deleteMutation} />}
        </div >
    )
}

export default Post
