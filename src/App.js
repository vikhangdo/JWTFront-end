import app from './App.scss';
import Nav from './components/navigation/nav.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router";
import { ToastContainer} from 'react-toastify';
import Login from './components/login/login.js';
import Register from './components/register/register.js';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element="home" />
      <Route path="/news" element="news" />
      <Route path="/about" element="about" />
      <Route path="/contact" element="contact" />
      <Route path="*" element="404" />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>

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
