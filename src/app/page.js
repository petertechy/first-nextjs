"use client";
import AddPassenger from "@/components/AddPassenger";
import DisplayAvailableSeats from "@/components/DisplayAvailableSeats";
import DisplayPassenger from "@/components/DisplayPassenger";
import React, { useState } from "react";

const page = () => {
  const [passenger, setPassenger] = useState({ name: "", seat: "" });
  const [allPassengers, setAllPassengers] = useState([]);

  const handleSubmitPassenger = (newPassenger) => {
    setAllPassengers([...allPassengers, newPassenger]);
  };
  return (
    <div className="col-7 mx-auto p-3 border rounded-3 shadow-sm bg-warning bg-opacity-25">
      <h2 className="mb-3 text-danger">Passanger Manifest App</h2>
      <AddPassenger
        submit={handleSubmitPassenger}
        allPassengers={allPassengers}
        setPassenger={setPassenger}
      />
      <DisplayAvailableSeats allPassengers={allPassengers} />
      <DisplayPassenger allPassengers={allPassengers} />
    </div>
  );
};

export default page;
