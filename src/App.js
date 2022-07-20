import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserManagePage from "./UserManagePage/UserManagePage";
import DemoToolkitPage from "./DemoToolkitPage/DemoToolkitPage";
import LoginPage from "./Pages/LoginPage";
import SpinnerComponent from "./Components/SpinnerComponent/SpinnerComponent";

function App() {
  return (
    <div className="App">
      <SpinnerComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserManagePage />} />
          <Route path="/toolkit" element={<DemoToolkitPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
