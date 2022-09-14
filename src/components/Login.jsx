import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  const [name, setName] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((name !== undefined) | "") {
      sessionStorage.setItem("name", name);
      navigate("/todos");
    }
  };
  return (
    <div className="bg-light-3 dark:bg-dark-5 h-screen ">
      <div>
        <Header />
      </div>

      <div className="grid mt-20 ">
        <div className="columns-2 gap-4 flex justify-center items-center flex-col md:flex-row">
          <div className="bg-gradient-to-r from-light-4 to-light-2 dark:from-dark-1 dark:to-dark-3 w-96 h-96 rounded-l-2xl"></div>
          <div className="bg-gradient-to-l from-light-4 to-light-2 dark:from-dark-1 dark:to-dark-3 w-96 h-96 rounded-r-2xl flex flex-col items-center">
            <p className=" text-2xl font-bold text-dark-1 drop-shadow-2xl mt-24 dark:text-dark-4 ">
              {" "}
              UserName
            </p>
            <form className="flex flex-col " onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="enter username"
                className="mt-4 border-2 rounded-xl text-center border-light-1 focus:outline-none focus:border-4 text-dark-1"
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type="submit"
                className="mt-4 border-2 rounded-2xl  font-semibold hover:border-4  border-dark-1  bg-light-1 text-dark-1 dark:bg-dark-3 dark:text-dark-4 dark:border-dark-4"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
