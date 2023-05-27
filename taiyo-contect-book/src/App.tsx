import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Map from "./components/Maps/Map";
import LineGraph from "./components/Charts/LineGraph";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<ContactPage />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/charts" element={<LineGraph />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
