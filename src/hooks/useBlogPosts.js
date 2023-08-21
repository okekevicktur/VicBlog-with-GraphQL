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

export const useBlogPosts = () => {
  const { error, loading, data } = useQuery(GET_BLOGPOSTS);
  return { error, loading, data };
};
