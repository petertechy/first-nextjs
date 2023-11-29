import React from "react";

const DisplayPassenger = ({ allPassengers }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Passanger Name</th>
            <th>Seat #</th>
          </tr>
        </thead>
        <tbody>
          {allPassengers.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.seat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayPassenger;
