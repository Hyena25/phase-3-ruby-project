import { useParams } from "react-router-dom";
import React, { useState } from "react";

// we can write our form here,

const ShowRestaurant = () => {
  let { id } = useParams(); //id is the restaurant id

  fetch(`http://localhost:9292/restaurants/${id}`)
    .then((r) => r.json())
    .then(console.log);
  console.log(id);

  const [review, setReview] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let postReview = {
      description: review,
      date_published: date,
    };

    return (
      <div formContainer>
        <h1>Im a Restaurant</h1>
        <div className="form">
          <h3>Add A Restaurant</h3>
          <form onSubmit={handleSubmit}>
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
          </form>
        </div>
      </div>
    );
  };
};
export default ShowRestaurant;
