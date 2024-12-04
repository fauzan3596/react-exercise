import axios from "axios";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../config/firebase";

const URL = "https://marred-lily-wound.glitch.me";

const fetchPosts = async () => {
  try {
    const data = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (temp) => {
  const { id } = temp;
  try {
    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, temp);
  } catch (error) {
    console.log(error);
  }
};

const addPost = async (temp) => {
  try {
    const response = await fetchPosts();

    await setDoc(
      doc(
        db,
        "posts",
        response.length > 0
          ? (Math.max(...response.map((post) => post.id)) + 1).toString()
          : "1"
      ),
      temp
    );
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
