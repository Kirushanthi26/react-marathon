export const fetchPosts = async (pageNum: number = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`,
  );

  //throw new Error("something wrong.... getting data...");
  return response.json();
};
