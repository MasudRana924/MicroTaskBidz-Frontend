import './App.css';
import {

  Routes,
  Route,
} from "react-router-dom";
import UserDetails from './pages/user/UserDetails';
import UpdateInfo from './pages/user/UpdateInfo';
import ResetPassword from './pages/user/Resetpassword';
import Login from './pages/user/Login';
import UserSignup from './pages/user/UserSignup';
import Changepassword from './pages/user/Changepassword';


function App() {
  return (
    <Routes >
      <Route path="/user-signin"  element={< Login/>}></Route>
      <Route path="/user-signup"  element={< UserSignup/>}></Route>
      <Route path="/user/password" element={<ResetPassword/>}></Route>
      <Route path="/user/changepassword" element={<Changepassword/>}></Route>
      <Route path="/user/updateinfo" element={<UpdateInfo/>}></Route>
     <Route path="/user-info"  element={< UserDetails/>}></Route>
    </Routes>
  );
}
export default App;
