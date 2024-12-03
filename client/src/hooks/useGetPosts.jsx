import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/Auth";
import { fetchPosts } from "../services";

function useGetPosts() {
  const { setPosts } = useContext(AuthContext);

  const getAllPosts = async () => {
    try {
      const result = await fetchPosts();
      setPosts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();

    const interval = setInterval(() => {
        getAllPosts();
      }, 100);
  
      return () => clearInterval(interval);
  }, []);

  return;
}

export default useGetPosts;
