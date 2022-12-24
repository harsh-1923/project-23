import './App.css';
import {Routes, Route} from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import GenerateRequestPage from './Pages/GenerateRequestPage/GenerateRequestPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/generateRequest" element={<GenerateRequestPage />} />
      </Routes>
    </div>
  );
}

export default App;