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
            <button>Delete</button> <button>Update title</button>
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
