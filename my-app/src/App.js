import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AddMechanic from "./components/AddMechanic";
import Locations from "./components/Locations";
import AvailableMechanics from "./components/AvailableMechanics";
import Footer from "./components/Footer";
import ViewDetails from "./components/ViewDetails";
import AddComment from "./components/AddComment";
import AddUser from "./components/AddUser";

function App() {
  const [mechanic, setMechanic] = useState();

  useEffect(() => {
    fetch("/mechanics", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMechanic(data));
  }, []);

  const id = Array.isArray(mechanic)
    ? mechanic.map((element) => {
        return element.id;
      })
    : null;

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/add"
          element={
            <AddMechanic mechanic={mechanic} setMechanic={setMechanic} />
          }
        />
        <Route path="/location" element={<Locations />} />
        <Route
          path="/available"
          element={<AvailableMechanics mechanic={mechanic} />}
        />
        <Route
          path="/available/:id"
          element={<ViewDetails mechanics={mechanic} />}
        />
        <Route path="/available/:id/name" element={<AddUser id={id} />} />
        <Route
          path="/available/:id/name/comment"
          element={<AddComment id={id} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;