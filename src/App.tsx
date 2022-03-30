import React, { useContext } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/auth/requireAuth';
import { AuthContext } from './contexts/auth/authContext';

function App() {
  const auth = useContext(AuthContext);
  
  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }
  return (
    <div className="App">
      <header>
        <h1>Header da Pagina</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Private</Link>
          {auth.user && <a href='javascript:;' onClick={handleLogout}>Sair</a>}
        </nav>
      </header>
      <hr /> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
