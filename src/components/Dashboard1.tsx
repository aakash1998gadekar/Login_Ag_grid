import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext1";
import jsonFile from "../data/data.json";

const Dashboard1 = () => {
  const { user } = useContext(LoginContext);

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav d-flex flex-row ">
            {jsonFile.options.map((item, index) => (
              <React.Fragment key={index}>
                {item.handler.action === "LINK" && (
                  <li className="nav-item p-2">
                    <a className="nav-link" href={item.handler.link}>
                      {item.label}
                    </a>
                  </li>
                )}
                {item.handler.action === "LEFT-CHILD" && (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id={item.label}
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {item.label}
                    </a>
                    <div className="dropdown-menu" aria-labelledby={item.label}>
                      {item.child?.map((option, childIndex) => (
                        <a key={childIndex} className="dropdown-item" href={option.handler.resource}>
                          {option.label}
                        </a>
                      ))}
                    </div>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </nav>
      <h1>Hii {user.name}</h1>
    </div>
  );
};

export default Dashboard1;
