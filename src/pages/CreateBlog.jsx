import { React, useEffect } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const CreateBlog = () => {
  // const type Customer ={
  //     id:number;
  //     name: string;
  //     industry: string;
  // };

  return (
    <div className="formWrap">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=""
      >
        <p className="titles">Blog Form</p>
        <div className="titleWrap">
          <label>Title of your Post</label>
          <input type="text" placeholder="Best Hacking Practice" />
        </div>
        <div className="postWrap">
          <label>Write your Post</label>
          <textarea />
        </div>

        <Link to="/">
          <button type="submit" className="">
            Post Blog
          </button>
        </Link>
      </form>
    </div>
  );
};

export default CreateBlog;
