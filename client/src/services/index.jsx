import axios from "axios";
import Swal from "sweetalert2";

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

const updatePost = async (temp) => {
  const { id, posting, title, content } = temp;
  try {
    const posts = await axios({
      method: "PUT",
      url: `${URL}/posts/${id}`,
      data: { title, content, posting },
    });
    return posts.data;
  } catch (error) {
    console.log(error);
  }
};

const addPost = async (temp) => {
  const { title, content, posting } = temp;
  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/posts`,
    });
    const posts = response.data;

    await axios({
      method: "POST",
      url: `${URL}/posts`,
      data: {
        id:
          posts.length > 0
            ? (Math.max(...posts.map((post) => post.id)) + 1).toString()
            : "1",
        title,
        content,
        posting,
      },
    });
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "A new post has been created",
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: error.message,
    });
  }
};

export { fetchPosts, updatePost, addPost };
