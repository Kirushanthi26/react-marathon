export const fetchPosts = async (pageNum: number = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`,
  );

  //throw new Error("something wrong.... getting data...");
  return response.json();
};

export const fetchComment = async (postId: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  );

  return response.json();
};

export const deletePost = async (postId: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "DELETE",
    },
  );

  return response.json();
};

export async function updatePost(postId: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "PATCH",
      body: JSON.stringify({ title: "REACT QUERY FOREVER!!!!" }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    },
  );
  return response.json();
}
