import React from "react";
import Link from "next/link";

const Navbar = ({ user }) => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="sign-in">
          Sign In
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="sign-up">
          Sign Up
        </Link>
      </li>
      <li className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="dashboard" role="button" aria-expanded="false">Dashboard</Link>
    <ul class="dropdown-menu">
      <li><Link className="dropdown-item" href="#">Account</Link></li>
      <li><Link className="dropdown-item" href="#">Another action</Link></li>
    </ul>
  </li>
    </ul>
  );
};

export default Navbar;
