import axios from "axios";

const URL = "http://localhost:3000";

const fetchPosts = async () => {
  try {
    const posts = await axios({
      method: "GET",
      url: `${URL}/posts`,
    });
    return posts.data;
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (id, newPosting) => {
  try {
    const posts = await axios({
      method: "PUT",
      url: `${URL}/posts/${id}`,
      data: newPosting,
    });
    return posts.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchPosts, updatePost };
