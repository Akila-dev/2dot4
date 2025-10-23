import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../lib/sanityClient";
import { BLOG_QUERY, SINGLE_BLOG_QUERY } from "../lib/queries";

import {
  DataFetchingVisuals,
  BlogSingle as BlogSingleCard,
  BlogCard,
} from "../components";

const BlogSingle = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingRecentBlogs, setLoadingRecentBlogs] = useState(true);

  //   Fetch Single Blog Post
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await client.fetch(SINGLE_BLOG_QUERY(slug));
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  //   Fetch Recent Blogs
  useEffect(() => {
    const fetchRecentBlogsPosts = async () => {
      try {
        const data = await client.fetch(BLOG_QUERY(0, 4));
        setRecentBlogs(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoadingRecentBlogs(false);
      }
    };
    fetchRecentBlogsPosts();
  }, []);

  return (
    <div className="flex gap-[2em] flex-col md:flex-row mt-[6em] container-x">
      <div className="w-full">
        <DataFetchingVisuals
          isLoading={loading}
          dataLength={1}
          noDataFoundText="This post is currently unavailable. Please check back later."
        >
          <BlogSingleCard data={blog} />
        </DataFetchingVisuals>
      </div>
      <div className="w-full md:min-w-[20em] md:max-w-[20em]">
        <DataFetchingVisuals
          isLoading={loadingRecentBlogs}
          dataLength={3}
          noDataFoundText="No recent article available at the moment. Please check back later."
        >
          <div className="pb-[3em] space-y-[2em]">
            <h2>Recent Blog Posts</h2>
            <div className="space-y-[1em]">
              {recentBlogs?.map((recentBlog, index) => (
                <BlogCard data={recentBlog} key={index} mini_card />
              ))}
            </div>
          </div>
        </DataFetchingVisuals>
      </div>
    </div>
  );
};

export default BlogSingle;
