import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Route } from "react-router";
const PrivateRoute = (props) => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({});
  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (!session) {
      navigate("/login");
    }
    if (session) {
      //check role
    }
  }, []);
  const Component = props.component;
  return (
    <>
      <Component />
    </>
  );
};
export default PrivateRoute;
