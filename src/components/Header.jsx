import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [theme, setTheme] = useState("light");

  const name = sessionStorage.getItem("name");

  const navigate = useNavigate();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const logout = () => {
    sessionStorage.removeItem("name");
    navigate("/");
  };
  useEffect(() => {
    const rootElement = window.document.documentElement;
    if (theme === "dark") {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-gradient-to-r from-light-4 to-light-1 dark:from-dark-1 dark:to-dark-3 w-screen h-24 flex justify-between">
      <div>
        <div className="mt-2 ml-2">
          <p className="text-lg font-bold text-dark-1 dark:text-white">
            
            Welcome {name ? name.toUpperCase() : ""}
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-end mr-2">
          <button
            className=" mt-2 mr-2  bg-light-1 text-dark-1 dark:bg-dark-3 dark:text-dark-4 text-base hover:border-3"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <i className="bi bi-brightness-high "></i>
            ) : (
              <i className="bi bi-moon"></i>
            )}
          </button>
          {name ? (
            <button
              className=" mt-2 mr-2 w-fit p-1 border-2 rounded-2xl border-dark-1  bg-light-1 text-dark-1 dark:bg-dark-3 dark:text-dark-4 dark:border-dark-4 text-xs hover:border-3"
              onClick={logout}
            >
              Log Out
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
