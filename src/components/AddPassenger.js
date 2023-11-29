import React, { useState } from "react";

const AddPassenger = ({ submit, allPassengers, setPassenger }) => {
  const [name, setName] = useState("");
  const [seat, setSeat] = useState("");
  const handleInputName = (event) => {
    setName(event.target.value);
  };
  const handleInputSeat = (event) => {
    setSeat(event.target.value);
  };

  const handleSubmit = () => {
    const taken = allPassengers.find((item) => 
    item.seat == seat 
    );
    if (taken || seat >=30  || seat <=0) {
      window.alert("This seat is already taken or invalid seat selected ");
    } else {
      submit({ name, seat });
    }
  };
  return (
    <div className="mb-5">
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Passenger Name"
        onChange={(e) => handleInputName(e)}
        value={name}
      />
      <input
        className="form-control mb-3"
        type="number"
        min={2}
        max={30}
        placeholder="Preffered Seat"
        value={seat}
        onChange={(e) => handleInputSeat(e)}
      />

      <button onClick={handleSubmit} className=" form-control btn btn-success">
        {" "}
        Add Passenger
      </button>
    </div>
  );
};

export default AddPassenger;
