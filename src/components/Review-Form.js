import React, { useState } from "react";

const ReviewForm = ({ addNewReview }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let postReview = {
      firstName: firstName,
      lastName: lastName,
      review: review,
    };
    fetch("localhost:9292/critics", {
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
        <h3>Add A Review</h3>
        <form onSubmit={handleSubmit}>
          <input
            label="First Name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            label="Last Name"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            label="review"
            placeholder="Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <br />
          <input type="Submit" value="Add Review" className="button"/>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
