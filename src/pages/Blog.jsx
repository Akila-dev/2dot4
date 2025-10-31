import { useState, useEffect } from "react";

import { client } from "../lib/sanityClient";
import { BLOG_QUERY } from "../lib/queries";

const POSTS_PER_PAGE = 6;

import { DataFetchingVisuals, BlogCard } from "../components";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Initial fetch
  useEffect(() => {
    const fetchInitialPosts = async () => {
      try {
        const data = await client.fetch(BLOG_QUERY(0, POSTS_PER_PAGE));
        setBlogs(data);
        setHasMore(data.length === POSTS_PER_PAGE);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialPosts();
  }, []);

  // Load more handler
  const loadMore = async () => {
    setLoadingMore(true);
    try {
      const nextPage = page + 1;
      const start = nextPage * POSTS_PER_PAGE;
      const newPosts = await client.fetch(BLOG_QUERY(start, POSTS_PER_PAGE));

      setBlogs((prev) => [...prev, ...newPosts]);
      setPage(nextPage);
      setHasMore(newPosts.length === POSTS_PER_PAGE);

      console.log(newPosts);
    } catch (error) {
      console.error("Error loading more blogs:", error);
    } finally {
      setLoadingMore(false);
    }
  };
  return (
    <div>
      <DataFetchingVisuals
        isLoading={loading}
        loadingType="postArchive"
        dataLength={3}
        noDataFoundText="No article available at the moment. Please check back later."
      >
        <div className="mt-[5em]">
          <div className="w-full px-4 md:px-8 lg:px-10 xl:px-[3vw]">
            <BlogCard data={blogs[0]} hero />
          </div>
          <div className="container-x py-[3em] space-y-[2em]">
            <h2>Recent Blog Post</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2em] items-stretch">
              {blogs?.map((blog, index) => (
                <BlogCard data={blog} key={index} />
              ))}
            </div>
            <div className="flex justify-center">
              {" "}
              <button
                onClick={loadMore}
                disabled={!hasMore || loadingMore}
                className={`btn-1 p min-w-[10em] ${
                  !hasMore ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loadingMore
                  ? "Loading..."
                  : hasMore
                  ? "Load More"
                  : "No More Articles"}
              </button>
            </div>
          </div>
        </div>
      </DataFetchingVisuals>
    </div>
  );
};

export default Blog;
