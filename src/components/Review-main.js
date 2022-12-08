import React from "react";
import ReviewForm from "./Review-Form";
import ReviewCard from "./Review-card";
// import { Link } from "react-router-dom";

const Reviews = ({ criticsAndReviewsData }) => {
  return (
    <div className="movie-container">
      <ReviewForm />
      {criticsAndReviewsData.map((CARD) => (
        <ReviewCard mapped={CARD} />
      ))}
    </div>
  );
};

export default Reviews;
