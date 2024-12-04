import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import useGetPosts from "../hooks/useGetPosts";
import Card from "../components/Card";

function HomePage() {
  const navigate = useNavigate();
  const { user, loading, posts } = useContext(AuthContext);
  useGetPosts();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate("/login");
      }
    }
  }, [navigate, loading]);

  const filteredPosts = posts.filter((post) => post.posting === 1);

  if (loading) {
    return <h1>Loading.........</h1>;
  }

  return (
    <main className="min-h-screen w-3/4 mx-auto bg-gray-100">
      <div className="bg-cyan-700 p-5 text-center">
        <h1 className="text-2xl text-white font-medium">Home Page</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-3 p-5">
        {filteredPosts.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </div>
    </main>
  );
}

export default HomePage;
