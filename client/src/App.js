import './App.css';
import {Routes, Route} from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;