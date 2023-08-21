import React from "react";
// import ReactDOM from "react-dom/client";
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
  const { error, loading, data } = useQuery(GET_BLOGPOSTS);
  console.log({ error, loading, data });
  return (
    <div>
      {data.posts.map((post) => {
        return (
          <div>
            {post.title}
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
