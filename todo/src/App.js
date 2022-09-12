import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Content from "./components/Content";


function App() {
  
  return (
   <BrowserRouter>
   <Routes>
    <Route  path="/" element={<Login />} />
    <Route path="/todos" element={<Content />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
