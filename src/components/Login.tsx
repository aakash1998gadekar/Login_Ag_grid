import { useContext, useState, FC, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(LoginContext);
  const [formData, setFormData] = useState<{ name: string; password: string }>({
    name: "",
    password: "",
  });
  const inputTypes: string[] = ["name", "password"];
  

  const labelText = (str:string) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleClick = () => {
    setData(formData);
    const lowerCaseName: string = formData.name.toLowerCase();
    if (lowerCaseName === "aman" && formData.password==="1234") {
        navigate("/dashboard");
    } else {
        console.log("User Not Registered");

    }
    // navigate("/dashboard");
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="bg-info p-6 ">
        {inputTypes.map((inp) => {
            
            return(
                
                <div key={inp} className="mb-3 row">

      <label className="col-sm-3 col-form-label " htmlFor={`${inp}`}>
        {labelText(inp)}
        {/* {inp} */}
      </label>
         
      <div className="col-sm-9 ">
        <input
        className="form-control"
        type={`${inp}`}
        name={`${inp}`}
        value={formData[inp]}
        placeholder={`Enter your ${inp}`}
        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        />
      </div>
        </div>
            )
        })}
      
      <button
        className="btn btn-primary"
        type="button"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
