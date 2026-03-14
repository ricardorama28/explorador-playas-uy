import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BeachDetail from "./pages/BeachDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/playa/:id" element={<BeachDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
