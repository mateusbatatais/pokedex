import List from "./pages/List";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/Detail/:name" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
