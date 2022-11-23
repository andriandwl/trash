import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Navigate, Route, Routes } from "react-router-dom";
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
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import SchdulingPage from "./pages/SchdulingPage";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import CantFind from "./pages/CantFind";

const App = () => {
  // const [user, setUser] = React.useState(null);
  return (
    <HelmetProvider>
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />

          {/* <Route
            element={
              <ProtectedRoute user={user} isAllowed={!!user}>
                <Route path="home" element={<HomePage />} />
                <Route path="dashboard" element={<Dashboard />} />
              </ProtectedRoute>
            }
          ></Route> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/edukasi" element={<EdukasiPage />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/kontak-kami" element={<ContactUsPage />} />
          <Route path="/profile/" element={<ProfilePage />} />
          <Route path="/profile-user" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/pembayaran" element={<DashboardPayment />} />
          {/* <Route
            path="dashboard-edukasi"
            element={
              <ProtectedRoute
                redirectPath="/dashboard"
                isAllowed={!!user && user.role.includes(1)}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/dashboard/edukasi" element={<EducationPage />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route
            path="/dashboard/tambah-edukasi"
            element={<AddEducationPage />}
          />
          <Route path="/dashboard/penjadwalan" element={<SchdulingPage />} />
          <Route path="*" element={<CantFind />} />
        </Routes>
      </main>
      <footer></footer>
    </HelmetProvider>
  );
};

// const ProtectedRoute = ({ isAllowed, redirectPath = "/landing", children }) => {
//   if (!isAllowed) {
//     return <Navigate to={redirectPath} replace />;
//   }

//   return children ? children : <Outlet />;
// };

export default App;
