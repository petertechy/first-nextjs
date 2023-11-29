"use client";
import Bio from "@/components/Bio";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const Page = () => {
  // const [newtask, setNewTask] = useState("");
  // const [allTasks, setAllTasks] = useState([]);

  // const handleChange = (event) => {
  //   setNewTask(event.target.value);
  // };

  // const addTask = () => {
  //   setAllTasks([...allTasks, newtask]);
  // };

  // const handleDelete = (n) => {
  //   setAllTasks(allTasks.filter((item, index) => index != n));
  // };

  let userObject = { name: "Adebisi", course: "Web Development", height: "178cm" };
  let userFiles = "www.highlyprotected files"
  return (
    <div>
      <div className="min-vh-100 bg-success bg-opacity-50 d-flex align-items-center justify-content-center">
        <div>
          <Navbar user={userObject} />
          -------------------------
          <Bio files={userFiles} user={userObject} />
        </div>
      </div>

      {/* <h1 className="text-danger">A simple todo Application</h1>

      <input onChange={handleChange} type="text" />

      <button className="btn btn-danger " onClick={addTask}>
        {" "}
        Add Task
      </button>

      <div>
        <ul>
          {allTasks.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <button
                onClick={() => handleDelete(index)}
                className="btn btn-danger"
              >
                {" "}
                D
              </button>{" "}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Page;
