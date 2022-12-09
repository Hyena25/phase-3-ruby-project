import React from "react";
import ReviewForm from "./Review-Form";
import ReviewCard from "./Review-card";
// import { Link } from "react-router-dom";

const Reviews = ({ reviewsData, criticsData, removeReview }) => {
  return (
    <div className="restaurant-container">
      <ReviewForm />
      {criticsData.map((CARD) => (
        <ReviewCard
          reviewsData={reviewsData}
          removeReview={removeReview}
          mapped={CARD}
        />
      ))}
    </div>
  );
};

export default Reviews;
