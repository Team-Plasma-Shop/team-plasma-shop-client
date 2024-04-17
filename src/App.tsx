import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import AboutPage from './pages/aboutPage';
import SignupPage from './pages/signupPage';
import Header from './components/header';
import AccountPage from './pages/accountPage';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<AccountPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;