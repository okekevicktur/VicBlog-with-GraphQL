import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BlogList from "./pages/BlogList";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "./pages/CreateBlog";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route index path="/" element={<BlogList />} />
        <Route index path="/create-blog" element={<CreateBlog />} />
      </Routes>
    </>
  );
}

export default App;
