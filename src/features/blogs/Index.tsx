import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Post from "./Post"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

const BlogAppIndex = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="bg-amber-50 h-max m-5 p-3">
                <h1 className="text-2xl font-semibold">Post Blog - Learn React Query</h1>
                <Post />
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default BlogAppIndex
