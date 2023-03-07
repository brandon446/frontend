import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewDetails() {
  const { id } = useParams();
  const [mechanics, setMechanics] = useState();

  useEffect(() => {
    fetch(`/mechanics/${id}`)
      .then((r) => r.json())
      .then((data) => setMechanics(data));
  }, [id]);

  if (mechanics === undefined) {
    return mechanics;
  } else {
    console.log("error: missing");
  }

  return (
    <div>
      <h1>Mechanics {id}</h1>
      <h2>{mechanics.name}</h2>
      <p>{mechanics.age}</p>
      <p>{mechanics.expertise}</p>
      <p>{mechanics.location}</p>

      <h3>comments</h3>
      {Array.isArray(mechanics.reviews)
        ? mechanics.reviews.map((element) => {
            return <p>{element.review}</p>;
          })
        : null}

      <Link to={`/available/${mechanics.id}/name`}>
        <button className="btn btn-primary btn1">Comment</button>
      </Link>
    </div>
  );
}

export default ViewDetails;
