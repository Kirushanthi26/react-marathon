import type { Post } from "./Post"


export type Comment = {
    postId: number
    id: number,
    name: string,
    email: string,
    body: string
}

type PostDetailProps = {
    post: Post
}


const PostDetails = ({ post }: PostDetailProps) => {
    const data: Comment[] = []
    return (
        <div>
            <h3 style={{ color: "blue" }}>{post.title}</h3>
            <div className="flex gap-5">
                <button className="bg-amber-300 p-3">Delete</button> <button className="bg-amber-300 p-3">Update title</button>
            </div>
            <p>{post.body}</p>
            <h4>Comments</h4>
            {data.map((comment) => (
                <li key={comment.id}>
                    {comment.email}: {comment.body}
                </li>
            ))}
        </div>
    )
}

export default PostDetails
