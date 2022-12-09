import React, { useState } from "react";

const ReviewForm = ({ addNewReview }) => {
  const [review, setReview] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let postReview = {
      description: review,
      date_published: date,
    };
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postReview),
    })
      .then((r) => r.json())
      .then(() => addNewReview(postReview));
  };

  return (
    <div className="formContainer">
      <div className="form">
        <h3>Delete A Review </h3>
        {/* <form onSubmit={handleSubmit}>
          <input
            label="review"
            placeholder="Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <input
            label="Date Published"
            placeholder="Date Published"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <br />
          <input type="Submit" value="Add Review" className="button" />
        </form> */}
      </div>
    </div>
  );
};

export default ReviewForm;
