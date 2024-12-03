import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import useGetPosts from "../hooks/useGetPosts";
import Card from "../components/Card";
import { updatePost } from "../services";

function HomePage() {
  const navigate = useNavigate();
  const { user, loading, posts, setPosts } = useContext(AuthContext);
  useGetPosts();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate("/login");
      }
    }
  }, [navigate, loading]);

  const postingChangeHandler  = async (id, newValue) => {
    try {
      const postToUpdate = posts.find((post) => post.id === id);
      if (postToUpdate) {
        const updatedPost = { ...postToUpdate, posting: newValue };
        await updatePost(id, updatedPost); 
        const updatedPosts = posts.map((post) =>
          post.id === id ? updatedPost : post
        );
        setPosts(updatedPosts); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredPosts = posts.filter((post) => post.posting === 1);

  console.log(posts)

  if (loading) {
    return <h1>Loading.........</h1>;
  }

  if (user) {
    return (
      <main className="min-h-screen w-3/4 mx-auto bg-gray-100">
        <div className="bg-cyan-700 p-5 text-center">
          <h1 className="text-2xl text-white font-medium">Home Page</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-3 p-5">
          {filteredPosts.map((post) => {
            return (
              <Card
                key={post.id}
                post={post}
                postingChangeHandler={postingChangeHandler}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default HomePage;
