import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AddEducationPage from "./pages/AddEducationPage";
import Auth from "./pages/Auth";
import ContactUsPage from "./pages/ContactUsPage";
import Dashboard from "./pages/Dashboard";
import DashboardPayment from "./pages/DashboardPayment";
import EducationPage from "./pages/EducationPage";
import EdukasiPage from "./pages/EdukasiPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LayananPage from "./pages/LayananPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/RegisterPage";
import SchdulingPage from "./pages/SchdulingPage";
import Users from "./pages/Users";

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/edukasi" element={<EdukasiPage />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/kontak-kami" element={<ContactUsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/pembayaran" element={<DashboardPayment />} />
          <Route path="/dashboard/edukasi" element={<EducationPage />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/dashboard/tambah-edukasi"
            element={<AddEducationPage />}
          />
          <Route path="/dashboard/penjadwalan" element={<SchdulingPage />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
