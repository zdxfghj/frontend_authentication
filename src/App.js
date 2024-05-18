import { Navigation } from "./components/navigations";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from "./components/Login";
import Logout from "./components/Logout"
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <Navigation />
    
        <Routes>
            <Route exact path="/" element={< Home />} />
            <Route path="/user/login/" element={<Login />} />
            <Route path="/user/logout/" element={< Logout />} />
            <Route path="/user/registration/" element={< Registration />} />
        </Routes>
    </Router >
  );
}

export default App;
