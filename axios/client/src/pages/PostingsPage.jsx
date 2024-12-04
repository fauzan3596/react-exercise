import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import useGetPosts from "../hooks/useGetPosts";
import Card from "../components/Card";
import { addPost } from "../services";

function PostingsPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user, loading, posts } = useContext(AuthContext);
  useGetPosts();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate("/login");
      }
    }
  }, [navigate, loading]);

  const submitHandler = (e) => {
    e.preventDefault();
    const temp = {
      title,
      content,
      posting: 0,
    };
    addPost(temp);
  };

  if (loading) {
    return <h1>Loading.........</h1>;
  }

  const postingPosts = posts.filter((post) => post.posting === 1);
  const draftPosts = posts.filter((post) => post.posting === 0);

  return (
    <main className="min-h-screen w-3/4 mx-auto bg-gray-100">
      <div className="bg-cyan-700 p-5 text-center">
        <h1 className="text-2xl text-white font-medium">Posting Page</h1>
      </div>
      <form
        className="form-control w-1/2 mx-auto mt-4"
        onSubmit={submitHandler}
      >
        <div className="label">
          <span className="label-text font-medium">Title</span>
        </div>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="label mt-4">
          <span className="label-text font-medium">Content</span>
        </div>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="btn mt-8 bg-[#003465] text-white font-semibold border-0 text-lg hover:bg-blue-800">
          Submit
        </button>
      </form>
      <h2 className="text-2xl font-medium mx-5 mt-4">Posting</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5">
        {postingPosts.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </div>
      <h2 className="text-2xl font-medium mx-5 mt-4">Draft</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5">
        {draftPosts.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </div>
    </main>
  );
}

export default PostingsPage;
