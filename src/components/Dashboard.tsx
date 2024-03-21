import '../App.css'
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext1";
// import { Link } from 'react-router-dom'
import jsonFile from "../data/data.json";

const Dashboard = () => {
  const { user } = useContext(LoginContext);

  const [userName, setUserName] = useState<string>("");
  useEffect(() => {
    // Retrieve user's name from localStorage when component mounts
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []); // Empty dependency array to run this effect only once on component mount

  useEffect(() => {
    // Update user's name in localStorage when user changes
    if (user.name) {
      setUserName(user.name);
      localStorage.setItem("userName", user.name);
    }
  }, [user.name]); // Run this effect whenever user.name changes

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav d-flex flex-row justify-content-around w-100">
            {jsonFile.options.map((item, index) => (
              <>
                {item.handler.action === "LINK" && (
                  <li key={index} className="nav-item">
                    <a className="nav-link" href={item.handler.link}>
                      {item.label}
                    </a>
                  </li>
                )}
                {item.handler.action === "LEFT-CHILD" &&
                  (userName.toLowerCase() === "admin" ||
                    (userName.toLowerCase() === "aman" && item.label !== "Setup")) && (
                  <li className="nav-item dropdown d-flex flex-column align-items-center ">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id={item.label}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {item.label}
                    </a>
                    <div className="dropdown-menu " aria-labelledby={item.label}>
                      {item.child?.map((option, index) => (
                        <a
                          key={index}
                          className="dropdown-item"
                          href={option.handler.resource}
                        >
                          {option.label}
                        </a>
                      ))}
                    </div>
                  </li>
                )}
              </>
            ))}
            {/* <li className="nav-item">
              <a className="nav-link" href={"/"}>
                Logout
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
      <h1 className="my-5 py-5">Hii {userName}</h1>
    </div>
  );
};

export default Dashboard;
