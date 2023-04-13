import { useContext } from "react";
import Home from "./components/pages/home/Home";
import Profile from "./components/pages/profile/Profile";
import Login from "./components/pages/login/Login.jsx";
import Register from "./components/pages/register/Register.jsx";
import { AuthContext } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ user ? <Home /> : <Register />} />
          <Route
            path="/login"
            element={ user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/register" element={ user ? <Navigate to="/" /> : <Register />} />
          <Route path="/profile/:username" element={ user ? <Profile /> : <Navigate to="/" /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
