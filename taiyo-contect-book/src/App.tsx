import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Map from "./components/Maps/Map";
// import LineGraph from "./components/Charts/LineGraph";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contacts" element={<ContactPage />}></Route>
          <Route path="/map" element={<Map />}></Route>
          {/* <Route path="/charts" element={<LineGraph/>}></Route> */}
          {/* <Route path="/charts" element={<ChartsPage/>}></Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
