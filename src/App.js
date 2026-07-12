import app from './App.scss';
import Nav from './components/navigation/nav.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router";
import Login from './components/login/login.js';
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
    </Routes>
    </div>
  );
}

export default App;
