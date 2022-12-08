import React from "react";
// import { Link } from "react-router-dom";

const ReviewCard = ({ mapped, removeReview }) => {
  const handleDelete = () => {
    removeReview(mapped)
    window.confirm(`Do you really want to delete ${mapped.first_name}${mapped.last_name}'s review `);
}
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
        <p> {mapped.reviews.map((reviewer) => reviewer.date_published )}</p>
        <button onClick={handleDelete} className="delete-button-reviews"> DELETE </button>
      </div>
    </div>
  );
};

export default ReviewCard;
