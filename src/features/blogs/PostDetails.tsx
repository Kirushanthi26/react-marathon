import { useQuery } from "@tanstack/react-query"
import type { Post } from "./Post"
import { fetchComment } from "../../api/blogApi/blogApi"


export type Comment = {
    postId: number
    id: number,
    name: string,
    email: string,
    body: string
}

type PostDetailProps = {
    post: Post
    deleteMutation: (postId: number) => void
}


const PostDetails = ({ post, deleteMutation }: PostDetailProps) => {
    const { data, isError, isLoading, error } = useQuery<Comment[]>({
        queryKey: ["comment", post.id],
        queryFn: () => fetchComment(post.id),
        staleTime: 2000
    })

    if (isLoading) return <h2 className="text-3xl font-semibold">Comments are Loading.....</h2>

    if (isError) return <p>{error.message}</p>

    if (!data) return

    return (
        <div>
            <h3 style={{ color: "blue" }}>{post.title}</h3>
            <div className="flex gap-5">
                <button className="bg-amber-300 p-3"
                    onClick={() => deleteMutation(post.id)}>Delete</button> <button className="bg-amber-300 p-3">Update title</button>
            </div>
            <p>{post.body}</p>
            <h4 className="font-semibold text-lg mt-2">Comments</h4>
            {data.map((comment) => (
                <li key={comment.id}>
                    {comment.email}: {comment.body}
                </li>
            ))}
        </div>
    )
}

export default PostDetails
