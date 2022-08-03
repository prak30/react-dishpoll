import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import VotingPage from "./components/VotingPage";
import Results from "./components/Results";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Login /> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/voting" element={<VotingPage />} />
          <Route path="/result" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
