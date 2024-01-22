import "./App.css";
import CategoryContainer from "./components/CategoryContainer";
import AddCategory from "./components/CategoryContainer/addCategory";
import UpdateCategory from "./components/CategoryContainer/updateCategory";
import LoginContainer from "./components/LoginContainer";
import Navbar from "./components/Navbar";
import RegisterContainer from "./components/RegisterContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const initialCategoryData = {
    id: "",
    name: "",
    is_active: true,
  };

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="/category" element={<CategoryContainer />} />
      <Route path="/category/addCategory" element={<AddCategory />} />
      <Route path="/category/updateCategory/:id" element={<UpdateCategory initialCategoryData={initialCategoryData} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
