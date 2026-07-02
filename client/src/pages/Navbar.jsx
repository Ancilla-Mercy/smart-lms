import React, { useState } from "react";

import Login from "./Login";
import Register from "./Register";
import Courses from "./Courses";

function Navbar() {

  const [page, setPage] = useState("login");

  return (
    <div className = "navbar">

      <button onClick={() => setPage("login")}>
        Login
      </button>

      <button onClick={() => setPage("register")}>
        Register
      </button>

      <button onClick={() => setPage("courses")}>
        Courses
      </button>

      {page === "login" && <Login />}
      {page === "register" && <Register />}
      {page === "courses" && <Courses />}

    </div>
  );
}

export default Navbar;