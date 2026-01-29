import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Post from "./Post"

const queryClient = new QueryClient()

const BlogAppIndex = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="bg-amber-50 h-screen m-5 p-3">
                <h1 className="text-2xl font-semibold">Post Blog - Learn React Query</h1>
                <Post />
            </div>
        </QueryClientProvider>
    )
}

export default BlogAppIndex
