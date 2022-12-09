import React, { useState, useEffect } from "react";

const RestaurantForm = ( {setRestaurant} ) => {
  const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let postDescription = {
      description: description,
      restaurant_id : "null",
      critic_id : "null",
      date_published : "null",
      likes : "null"
    };

    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postDescription),
    })
      .then((r) => r.json())
      .then(() => setRestaurant(postDescription));
  };

  return (
    <div>
      <div className="formContainer">
        <div className="form">
          <h3>Add Review</h3>
          <form onSubmit={handleSubmit}>
            <input
              type = "text" label="description" placeholder="Review" value={description} onChange={(e) => setDescription(e.target.value)}
            />
          <br />
          <input type="Submit" value="Add Review" className="button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestaurantForm;
