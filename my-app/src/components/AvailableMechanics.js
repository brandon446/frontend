import React from "react";
import { Link } from "react-router-dom";

function AvailableMechanics({ mechanic }) {
  function handleDelete(id) {
    fetch(`/mechanics/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(document.location.reload());
  }

  return (
    <div className="mech">
      {Array.isArray(mechanic)
        ? mechanic.map((mech, index) => {
            return (
              <div className="card" key={index}>
                <img src={mech.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{mech.name}</h5>
                  <p className="card-text">{mech.age}</p>
                  <p className="card-text">{mech.expertise}</p>
                  <p className="card-text">{mech.location}</p>
                  <hr />
                  <h3>Reviews {mech.reviews.length}</h3>

                  <hr />

                  {mech.reviews &&
                    mech.reviews.map((rev) => {
                      return <p>{rev.review}</p>;
                    })}
                  {/* <hr />
                  {mech.users &&
                    mech.users.map((rev) => {
                      return <p>{rev.name}</p>;
                    })} */}

                  <Link to={`/available/${mech.id}`}>
                    <button className="btn btn-primary btn1">Details</button>
                  </Link>

                  <button
                    onClick={() => {
                      handleDelete(mech.id);
                    }}
                    className="btn btn-primary delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default AvailableMechanics;