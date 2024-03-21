import  { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginContext, User } from "../context/LoginContext1";

import jsonFile from '../data/data.json';
const Login1 = () => {
  console.log(jsonFile);
  

    const navigate = useNavigate()


  const inputTypes: string[] = ["name", "password"];
  const {user,setUser} = useContext(LoginContext)

  const labelText = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [formData, setFormData] = useState<User>({
    name: "",
    password: "",
  });
  const handleClick = () => {
    setUser(formData);
    const lowerCaseName: string = formData.name.toLowerCase();
    if (lowerCaseName === "aman" && formData.password==="1234" ||lowerCaseName === "admin" && formData.password==="1234" ) {
        navigate("/home");
    } else {
        console.log("User Not Registered");

    }
    // navigate("/dashboard");
  };

  useEffect(()=> {
    console.log(user);
    
  },[user])


  return (
    <div className="container-fluid m-5 bg-info p-4 w-50 d-flex flex-column  ">
      {inputTypes.map((inp) => {
        return (
          <div key={inp} className="mb-3 row">
            <label className="col-sm-3 col-form-label " htmlFor={`${inp}`}>
              {labelText(inp)}
              {/* {inp} */}
            </label>

            <div className="col-sm-7 ">
              <input
                className="form-control"
                type={`${inp}`}
                name={`${inp}`}
                value={formData[inp]}
                placeholder={`Enter your ${inp}`}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
        );
      })}

<div className="d-flex  justify-content-center">

      <button className="btn btn-primary col-sm-3  " type="button" onClick={handleClick}>
        Submit
      </button>
</div>
    </div>
  );
};

export default Login1;
