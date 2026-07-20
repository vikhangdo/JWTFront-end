import React, { useEffect, useState } from "react";
import login from "./login.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../service/userService.js";
function Login(props) {
  const navigate = useNavigate();
  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");
  const valueLoginDefault = {
    isValidValueLogin: true,
    isValidPassword: true,
  };
  const [objValue, setObjValue] = useState(valueLoginDefault);
  const handleLogin = async () => {
    isValid();

    let response = await loginUser(valueLogin, password);

    if (response && response.data && +response.data.EC === 0) {
      //success
      let data = {
        isAuthented: true,
        tokens: "fake tokens",
      };

      sessionStorage.setItem("account", JSON.stringify(data));
      navigate("/users");
    }

    if (response && response.data && +response.data.EC !== 0) {
      toast.error(response.data.EM);
    }

    window.location.reload();
  };
  const isValid = () => {
    setObjValue(valueLoginDefault);
    if (!valueLogin) {
      setObjValue({ ...objValue, isValidValueLogin: false });
      toast.error("valueLogin is required!");
      return;
    }
    if (!password) {
      setObjValue({ ...objValue, isValidPassword: false });
      toast.error("Password is required!");
      return;
    }
  };
  const handlePressEnter = (event) => {
    if (event.key === "Enter" || event.code === "13") {
      handleLogin();
    }
  };

  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (session) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <div className="login-container">
        <div className="container">
          <div className="row m-3 m-sm-0">
            <div className="content-left col-sm-7 d-none d-sm-block d-sm-flex flex-column align-items-center justify-content-center">
              <div className="brand">
                <h1>HoiDanIT</h1>
              </div>
              <p>Chào mừng bạn đến với HoiDanIT</p>
            </div>
            <div className="content-right col-sm-5 d-flex flex-column gap-3 py-3">
              <div className="brand d-sm-none text-center font-weight-bold">
                <h1>HoiDanIT</h1>
              </div>
              <input
                type="text"
                placeholder="Username"
                className={
                  objValue.isValidValueLogin
                    ? "form-control"
                    : "form-control is-invalid"
                }
                value={valueLogin}
                onChange={(e) => {
                  setValueLogin(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className={
                  objValue.isValidPassword
                    ? "form-control"
                    : "form-control is-invalid"
                }
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onKeyDown={(e) => handlePressEnter(e)}
              />
              <button className="btn btn-primary" onClick={() => handleLogin()}>
                Login
              </button>
              <span className="text-center">
                <a className="forgot-password" href="">
                  Forgot Password?
                </a>
              </span>
              <hr />
              <div className="text-center">
                <button
                  className="btn btn-success"
                  onClick={() => navigate("/register")}
                >
                  Create new account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
