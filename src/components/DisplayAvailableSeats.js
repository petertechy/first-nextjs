import React, { useState, useEffect } from "react";

const DisplayAvailableSeats = ({ allPassengers }) => {
  const [availableSeats, setAvailableSeats] = useState([]);
  const getAvailableSeats = () => {
    let x = [];
    for (let i = 1; i <= 30; i++) {
      const taken = allPassengers.find((item) => item.seat == i);
      if (taken) continue;
      x.push(i);
    }
    // setAvailableSeats(x);
  };
  useEffect(() => {
    getAvailableSeats();
  }, [availableSeats]);

  return (
    <div className="my-4  justify-content-center d-flex flex-wrap">
      {availableSeats.map((item, index) => (
        <div
          key={index}
          className="border bg-danger fs-6 bg-opacity-50 rounded-3 p-2 text-center "
        >
          {item}
        </div>
      ))}
    </div>
  );
};
//npm install

export default DisplayAvailableSeats;
