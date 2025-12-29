import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BeachDetail from "./pages/BeachDetail.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playa/:id" element={<BeachDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
