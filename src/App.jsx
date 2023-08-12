import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import Miaudelos from "./components/Miaudelos";
import Profile from "./components/UserPage";
import NewMiaudelo from "./components/NewMiaudelo";
import MiaudeloDetails from "./components/MiaudelosDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/miaudelos/:id" element={<MiaudeloDetails />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/miaudelos" element={<Miaudelos />} />
        <Route path="/new-miaudelo" element={<NewMiaudelo />} />
        <Route path="/my-miaudelos" element={<Profile />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
