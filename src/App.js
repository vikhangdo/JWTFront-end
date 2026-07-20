import app from "./App.scss";
import Nav from "./components/navigation/nav.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import AppRoute from "./routes/appRoute.js";
function App() {
  return (
    <div>
      <Nav />
      <AppRoute />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
