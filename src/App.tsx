import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import AboutPage from './pages/aboutPage';
import SignupPage from './pages/signupPage';
import Header from './components/header';
import AccountPage from './pages/accountPage';
import TOTPPage from './pages/totpPage';
import PrivateRoutes from './utils/PrivateRoute';
import VerificationPage from "./pages/verificationPage";
import AdminPage from './pages/adminPage';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/admin" element={<AdminPage />}></Route>
          </Route>
          
          <Route path="/email-verification" element={<VerificationPage />}></Route>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/totp" element={<TOTPPage />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;