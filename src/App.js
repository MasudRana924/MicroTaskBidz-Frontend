import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import ConfirmEmail from './pages/user/ConfirmEmail';


function App() {
  return (
     <Routes>
      <Route path="/user/email/confirm" element={<ConfirmEmail/>}></Route>
     </Routes>
  );
}
export default App;
