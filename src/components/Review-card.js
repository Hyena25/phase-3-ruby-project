import React from "react";
// import { Link } from "react-router-dom";

const ReviewCard = ({ mapped }) => {
  //   {criticsAndReviewsObj.reviews.description}
  return (
    <div>
      <div className="media">
        <h1>
          {" "}
          {mapped.first_name} {mapped.last_name}{" "}
        </h1>
        <p> {mapped.age}</p>
        <p> {mapped.gender}</p>
        <h3> {mapped.celebrity.toString}</h3>
        <p> {mapped.reviews.map((reviewer) => reviewer.description)}</p>
        <p> {mapped.reviews.map((reviewer) => reviewer.date_published)}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
