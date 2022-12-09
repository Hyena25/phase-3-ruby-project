import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
const headers = {
  Accepts: "application/json",
  "Content-Type": "application/json",
};

const ReviewCard = ({ mapped, removeReview, reviewsData }) => {
  // console.log(reviewsData)
  const [updateReview, setUpdateReview] = useState(reviewsData);
  //console.log(mapped)
  const handleLikedReview = () => {
    fetch(`http://localhost:9292/reviews/${reviewsData.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ likes: ++reviewsData.likes }),
    })
      .then((r) => r.json())
      .then((data) => setUpdateReview(...data));
  };

  const handleDelete = () => {
    removeReview(mapped);
    window.confirm(
      `Do you really want to delete ${mapped.first_name} ${mapped.last_name}'s review `
    );
  };
  return (
    <div>
      <div className="media">
        <h1>
          {" "}
          {mapped.first_name} {mapped.last_name}{" "}
        </h1>
        <p> {mapped.age}</p>
        <p> {mapped.gender}</p>
        <h3> {mapped.celebrity}</h3>
        <p> {mapped.reviews.map((reviewer) => reviewer.description)}</p>
        <p> {mapped.reviews.date_published}</p>
        <button onClick={handleDelete} className="delete-button-reviews">
          {" "}
          DELETE{" "}
        </button>
        {/* <button onClick={()=>handleLikedReview(updateReview)} className="update-button-reviews">Like</button> */}
      </div>
    </div>
  );
};

export default ReviewCard;
