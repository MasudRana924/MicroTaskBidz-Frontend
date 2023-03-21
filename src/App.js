import './App.css';
import {

  Routes,
  Route,
} from "react-router-dom";
import ResetPassword from './pages/user/ResetPassword';
import Login from './pages/user/Login';
import UserSignup from './pages/user/UserSignup';

function App() {
  return (
    <Routes >
      <Route path="/user-signin"  element={< Login/>}></Route>
      <Route path="/user-signup"  element={< UserSignup/>}></Route>
      <Route path="/user/password" element={<ResetPassword/>}></Route>
    </Routes>
  );
}
export default App;
