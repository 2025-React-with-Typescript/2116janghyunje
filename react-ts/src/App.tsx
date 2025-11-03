// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

/** 간단 보호 라우트: 토큰 없으면 /login 으로 */
const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

/** 로그인 후 보여줄 메인 페이지 (예시) */
const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login', { replace: true });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>메인 페이지 (보호됨)</h2>
      <p>로그인에 성공하면 접근 가능합니다.</p>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <h1>회원 시스템</h1>
        {/* 간단 네비게이션 */}
        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ marginRight: 10 }}>메인</Link>
          <Link to="/login" style={{ marginRight: 10 }}>로그인</Link>
          <Link to="/register">회원가입</Link>
        </nav>

        <Routes>
          {/* 공개 라우트 */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 보호 라우트: RequireAuth로 감싸기 */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />

          {/* 그 외 경로 → 메인으로 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;