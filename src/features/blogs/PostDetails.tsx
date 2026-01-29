import { useQuery, type UseMutationResult } from "@tanstack/react-query"
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
    deleteMutationResult: UseMutationResult<any, Error, number, unknown>
    updateMutation: (postId: number) => void
    updateMutationResult: UseMutationResult<any, Error, number, unknown>
}


const PostDetails = ({ post, deleteMutation, deleteMutationResult, updateMutation, updateMutationResult }: PostDetailProps) => {
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
            <div className="flex gap-64">
                <div>
                    <button className="bg-amber-300 p-3"
                        onClick={() => deleteMutation(post.id)
                        }>Delete</button>

                </div>
                {deleteMutationResult.isPending && <div className="text-2xl font-semibold text-yellow-600">Delete Post Loading...</div>}

                {deleteMutationResult.isError && <div className="text-2xl font-semibold text-red-600">{deleteMutationResult.error.message}</div>}

                {deleteMutationResult.isSuccess && <div className="text-2xl font-semibold text-green-600">delete is successful</div>}

                <div>
                    <button className="bg-amber-300 p-3" onClick={() => updateMutation(post.id)
                    }>Update title</button>

                    {updateMutationResult.isPending && <div className="text-2xl font-semibold text-yellow-600">update Post Loading...</div>}

                    {updateMutationResult.isError && <div className="text-2xl font-semibold text-red-600">{updateMutationResult.error.message}</div>}

                    {updateMutationResult.isSuccess && <div className="text-2xl font-semibold text-green-600">update is successful</div>}

                </div>
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
