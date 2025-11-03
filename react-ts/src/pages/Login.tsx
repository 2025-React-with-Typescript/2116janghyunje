import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ username: 영문 시작, 영문/숫자/_/- 허용, 최대 10자 (최소 6자는 제출 시점에서 체크)
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // 전체 패턴: 첫 글자 영문, 이후 영문/숫자/_/- 만 허용, 0~9자(총 10자)
    const allowed = /^[A-Za-z][A-Za-z0-9_-]{0,9}$/;

    if (input === '' || allowed.test(input)) {
      setUsername(input);
      // 길이/형식 안내
      if (input && input.length < 6) {
        setUsernameError('❌ 아이디는 최소 6자 이상이어야 합니다.');
      } else {
        setUsernameError('');
      }
    } else {
      setUsernameError('❌ 아이디는 영문으로 시작, 영문/숫자/_/-만 6~10자 가능합니다.');
    }
  };

  // ✅ password: 8~12자, 위험 특수문자(' " ; ` \) 입력 불가
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // 금지 문자 포함 시 입력 자체 차단 + 에러 표시
    if (/['";`\\]/.test(input)) {
      setPasswordError("❌ 비밀번호에 ' \" ; ` \\ 문자는 입력할 수 없습니다.");
      return;
    }
    if (input.length > 12) return; // 길이 초과 입력 차단

    setPassword(input);
    if (input && input.length < 8) {
      setPasswordError('❌ 비밀번호는 최소 8자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 프런트 최종 체크
    if (!username || !password) {
      alert('아이디와 비밀번호를 입력하세요.');
      return;
    }
    if (usernameError || passwordError) {
      alert('입력값을 다시 확인하세요.');
      return;
    }
    if (username.length < 6) {
      alert('아이디는 최소 6자 이상이어야 합니다.');
      return;
    }
    if (password.length < 8) {
      alert('비밀번호는 최소 8자 이상이어야 합니다.');
      return;
    }

    try {
      setLoading(true);
      const res = await login({ username, password });
      // 토큰 저장
      localStorage.setItem('accessToken', res.accessToken);
      if ((res as any).refreshToken) {
        localStorage.setItem('refreshToken', (res as any).refreshToken);
      }

      alert('로그인 성공!');
      navigate('/', { replace: true });
    } catch (err: any) {
      const msg = err?.response?.data?.message || err?.message || '로그인 실패';
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '0 auto', padding: 20 }}>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        {/* USERNAME */}
        <div style={{ marginBottom: 15 }}>
          <label>Username (ID):</label><br />
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="영문 시작, 6~10자"
            required
            style={{ width: '100%', padding: 6 }}
          />
          {usernameError && (
            <p style={{ color: 'red', fontSize: '0.9em' }}>{usernameError}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div style={{ marginBottom: 15 }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="8~12자 (일부 특수문자 제한)"
            required
            style={{ width: '100%', padding: 6 }}
          />
          {passwordError && (
            <p style={{ color: 'red', fontSize: '0.9em' }}>{passwordError}</p>
          )}
        </div>

        <div style={{ marginTop: 10 }}>
          <button type="submit" disabled={loading}>
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </div>
      </form>

      <div style={{ marginTop: 10 }}>
        <button onClick={() => navigate('/register')}>회원가입</button>
      </div>
    </div>
  );
};

export default Login;