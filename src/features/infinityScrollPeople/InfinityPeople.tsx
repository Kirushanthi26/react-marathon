import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"


const InfinityPeople = () => {

    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <div className="p-5 h-screen bg-pink-50">
                <h1 className="text-sky-300 text-3xl font-semibold">Infinite Scroll - People Details</h1>
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default InfinityPeople
