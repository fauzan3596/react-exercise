import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";
import { updatePost } from "../services";

function Card({ post }) {
  const { title, content, posting } = post;
  const [isChecked, setIsChecked] = useState(posting === 1);

  const checkboxHandler = (e) => {
    const postingValue = e.target.checked ? 1 : 0;
    setIsChecked(postingValue);
    postingChangeHandler(postingValue);
  };

  const postingChangeHandler = (newValue) => {
    try {
      const temp = {
        ...post,
        posting: newValue,
      };
      updatePost(temp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <input
            type="checkbox"
            className="checkbox checkbox-accent"
            checked={isChecked}
            onChange={checkboxHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
