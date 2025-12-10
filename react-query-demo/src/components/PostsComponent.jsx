import { useQuery, useQueryClient } from "react-query";

function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery(
    "posts",
    async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      return response.json();
    },
    {
      staleTime: 10000, // data stays fresh for 10 seconds
      cacheTime: 300000, // data stays in cache for 5 minutes
    }
  );

  if (isLoading) {
    return <h3>Loading posts...</h3>;
  }

  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div>
      <h2>Posts (First 10)</h2>

      {/* Buttons to show advanced Query features */}
      <button onClick={() => refetch()}>Refetch Posts</button>

      <button
        onClick={() => {
          queryClient.invalidateQueries("posts");
        }}
        style={{ marginLeft: "10px" }}
      >
        Invalidate Cache
      </button>

      <button
        onClick={() => {
          queryClient.removeQueries("posts");
        }}
        style={{ marginLeft: "10px" }}
      >
        Remove Cache
      </button>

      {/* Shows when background fetch happens */}
      {isFetching && <p style={{ color: "purple" }}>Updating in background...</p>}

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "15px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
