import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import AboutPage from './pages/aboutPage';
import SignupPage from './pages/signupPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;