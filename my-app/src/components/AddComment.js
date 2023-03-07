import React, { useState } from "react";

function AddComment() {
  const [comment, setComment] = useState([]);
  const [review, setReview] = useState();
  const [ratings, setRatings] = useState();

  function handleComment(e) {
    e.preventDefault();
    setComment([...comment, review, ratings]);
    setReview("");
    setRatings("");

    fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        review,
        ratings,
      }),
    })
      .then((r) => r.json())
      .then(document.location.reload());
  }

  return (
    <div>
      <div>
        <form onSubmit={handleComment}>
          <div class="card text-center card1">
            <div class="card-header card2">Add A Comment</div>
            <div class="card-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Comment
                </label>
                <input
                  onChange={(e) => setReview(e.target.value)}
                  type="text"
                  class="form-control"
                  placeholder="Enter comment"
                  value={review}
                />

                <label for="exampleFormControlInput1" class="form-label">
                  Rating
                </label>
                <input
                  onChange={(e) => setRatings(e.target.value)}
                  type="integer"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="10"
                  value={ratings}
                />
              </div>

              <button class="btn btn-primary btn1">Add Comment</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddComment;