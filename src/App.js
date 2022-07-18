import List from "./pages/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
