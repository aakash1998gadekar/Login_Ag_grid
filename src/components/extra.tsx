import { useContext } from "react";
import { LoginContext } from "../context/LoginContext1";
// import { Link } from 'react-router-dom'
import jsonFile from "../data/data.json";

const Dashboard = () => {
  const { user } = useContext(LoginContext);
  // const navBarItems: string[] = [];
  // jsonFile["options"].map((item) => {
  //   navBarItems.push(item.label);
  // });


  return (
    <div >
      <nav className="navbar navbar-light bg-light ">
        <div className="container-fluid">
          <ul className="navbar-nav d-flex flex-row justify-content-around w-50 " >
            {jsonFile.options.map((item, index) => {
              if (item.handler.action === "LINK") {
                return (
                  <li key={index} className="nav-item px-2">
                    <a className="nav-link" href={item.handler.link}>
                      {item.label}
                    </a>
                  </li>
                );
              } else if (item.handler.action === "LEFT-CHILD") {
                return (
                  <li className="nav-item dropdown px-2 ">
                    <a
                      className="nav-link dropdown-toggle "
                      href="#"
                      id={item.label}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {item.label}
                    </a>
                    <div className="dropdown-menu" aria-labelledby={item.label}>
                      {item.child?.map((option, index) => {
                        return (
                          <a
                            key={index}
                            className="dropdown-item"
                            href={option.handler.resource}
                          >
                            {option.label}
                          </a>
                        );
                      })}
                    </div>
                  </li>
                );
              }
            })}
          </ul>
          </div>
        
      </nav>
      <h1>Hii {user.name}</h1>
    </div>
  );
};

export default Dashboard;
