import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Post from "./Post"

const queryClient = new QueryClient()

const BlogAppIndex = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="bg-amber-50 h-screen">
                <h1>Post Blog - Learn React Query</h1>
                <Post />
            </div>
        </QueryClientProvider>
    )
}

export default BlogAppIndex
