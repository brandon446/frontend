import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddUser({ id }) {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");

  function handleUser(e) {
    e.preventDefault();
    setUser([...user, name]);
    setName("");

    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((r) => r.json())
      .then(document.location.reload());
  }

  return (
    <div>
      <form onSubmit={handleUser}>
        <div class="card text-center card1">
          <div class="card-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Enter names"
                value={name}
                required
              />

              <input class="btn btn-primary btn1" type="submit" required />
              <Link
                to={`/available/${id}/name/comment`}
                class="btn btn-primary btn1"
                type="next"
              >
                {" "}
                next
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddUser;