import React from "react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "../hooks/useBlogPosts";

const BlogList = () => {
  const { error, data, loading } = useBlogPosts();
  if (error) return <div>Something went wrong</div>;
  if (loading) return <div>spinner......</div>;

  return (
    <>
      <div className="header">
        <p className="title">The Sort After Arab Blog </p>
        <div className="aside">
          <p>Have something to share with us? </p>
          <Link to="/create-blog" className=" submit">
            Creat a post
          </Link>
        </div>
      </div>
      <div className="blogContainer">
        {data
          ? data.posts.map((blog) => {
              return (
                <div className="blogCard">
                  <h2>{blog.title}</h2>
                  <p>{blog.body}</p>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default BlogList;
