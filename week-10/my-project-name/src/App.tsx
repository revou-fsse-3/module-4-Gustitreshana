import "./App.css";
import LoginContainer from "./components/LoginContainer";
import Navbar from "./components/Navbar";
import RegisterContainer from "./components/RegisterContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      {/* <Route path="/category" element={<CategoryContainer />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
