import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_BLOGPOSTS = gql`
  query {
    posts {
      userId
      id
      title
      body
    }
  }
`;

const BlogList = () => {
  const { error, data, loading } = useQuery(GET_BLOGPOSTS);
  console.log({ error, data, loading });
  return (
    <div>
      <p>Whats going on</p>
      {data.posts.map((blog) => {
        return (
          <div>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
