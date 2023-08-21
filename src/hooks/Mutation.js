import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

const Create_Blog = gql`
  mutation CreateBlog($name: string!, $quantityPerUnit: Int!) {
    createproduct(record: { id: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
      }
    }
  }
`;
const Mutation = () => {
  const [createblog, { data, loading, error }] = useMutation(Create_Blog, {
    variables: {
      name: "hotdog",
      quantityPerUnit: 4,
    },
  });
  return <div>{createblog}</div>;
};

export default Mutation;
