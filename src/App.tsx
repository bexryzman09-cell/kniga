import Header from "./components/Header"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import HomePages from "./pages/HomePages"
import AboutPages from "./pages/AboutPages"
import NotFoundPages from "./pages/NotFoundPages"
import QuestionmarkPages from "./pages/QuestionmarkPages"
import LoginPages from "./pages/LoginPages"
import RegisterPages from "./pages/RegisterPages"
import PasswordDeletePages from "./pages/PasswordDeletePages"
import ConfirmCodePages from "./pages/Confirmcodepages"
import SecurityPages from "./pages/SecurityPages"
import ScrollToTop from "./components/ScrollToTop";
import LibraryPages from "./pages/LibraryPages"

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/questionmark" element={<QuestionmarkPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/confirm-password" element={<PasswordDeletePages />} />
        <Route path="/confirm-code" element={<ConfirmCodePages />} />
        <Route path="/security" element={<SecurityPages />} />
        <Route path="/library" element={<LibraryPages />} />
        <Route path="*" element={<NotFoundPages />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App