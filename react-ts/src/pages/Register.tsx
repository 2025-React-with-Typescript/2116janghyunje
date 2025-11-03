import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register as registerApi } from '../api/auth';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ username: 영문 시작, 영문/숫자/_/- 허용, 6~10자
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const allowed = /^[A-Za-z][A-Za-z0-9_-]{0,9}$/;

    // 잘못된 입력이 들어오면 막고 메시지 표시
    if (input === '' || allowed.test(input)) {
      setUsername(input);
      setUsernameError('');
    } else {
      setUsernameError('❌ 아이디는 영문으로 시작하고, 영문/숫자/_/-만 6~10자 입력 가능합니다.');
    }
  };

  // ✅ password: 8~12자, 위험 특수문자(' " ; ` \) 입력 불가
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const invalid = /['";`\\]/.test(input);
    if (invalid) {
      setPasswordError("❌ 비밀번호에 ' \" ; ` \\ 문자는 입력할 수 없습니다.");
      return; // 입력 차단
    }
    if (input.length > 12) return; // 길이 제한

    setPassword(input);
    if (input.length < 8 && input.length > 0)
      setPasswordError('❌ 비밀번호는 최소 8자 이상이어야 합니다.');
    else setPasswordError('');
  };

  // ✅ password 확인
  const handlePasswordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const invalid = /['";`\\]/.test(input);
    if (invalid) {
      setPasswordCheckError("❌ 비밀번호에 ' \" ; ` \\ 문자는 입력할 수 없습니다.");
      return;
    }
    if (input.length > 12) return;

    setPasswordCheck(input);
    if (input && input !== password)
      setPasswordCheckError('❌ 비밀번호가 일치하지 않습니다.');
    else setPasswordCheckError('');
  };

  // ✅ 이메일: 이메일 형식만 입력 가능
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const filtered = input.replace(/[^A-Za-z0-9@._-]/g, '');
    if (filtered !== input) {
      setEmailError('❌ 이메일에는 영문, 숫자, @, ., _, - 만 입력 가능합니다.');
    } else if (filtered && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(filtered)) {
      setEmailError('❌ 이메일 형식이 올바르지 않습니다.');
    } else {
      setEmailError('');
    }
    setEmail(filtered);
  };

  // ✅ 회원가입 처리
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (usernameError || passwordError || passwordCheckError || emailError) {
      alert('입력값을 다시 확인하세요.');
      return;
    }

    if (!username || !password || !nickname || !email) {
      alert('모든 필드를 입력하세요.');
      return;
    }

    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      setLoading(true);
      await registerApi({ username, password, nickname, email });
      alert('회원가입 성공!');
      navigate('/login');
    } catch (err: any) {
      const msg = err?.response?.data?.message || err?.message || '회원가입 실패';
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '420px', margin: '0 auto', padding: '20px' }}>
      <h2>회원가입</h2>
      <form onSubmit={handleRegister}>
        {/* USERNAME */}
        <div style={{ marginBottom: '15px' }}>
          <label>Username (ID):</label><br />
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="영문 시작, 6~10자"
            required
            style={{ width: '100%', padding: '6px' }}
          />
          {usernameError && (
            <p style={{ color: 'red', fontSize: '0.9em' }}>{usernameError}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="8~12자 (일부 특수문자 제한)"
            required
            style={{ width: '100%', padding: '6px' }}
          />
          {passwordError && (
            <p style={{ color: 'red', fontSize: '0.9em' }}>{passwordError}</p>
          )}
        </div>

        {/* PASSWORD 확인 */}
        <div style={{ marginBottom: '15px' }}>
          <label>Password 확인:</label><br />
          <input
            type="password"
            value={passwordCheck}
            onChange={handlePasswordCheckChange}
            required
            style={{ width: '100%', padding: '6px' }}
          />
          {passwordCheckError && (
            <p style={{ color: 'red', fontSize: '0.9em' }}>{passwordCheckError}</p>
          )}
        </div>

        {/* NICKNAME */}
        <div style={{ marginBottom: '15px' }}>
          <label>Nickname:</label><br />
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
            style={{ width: '100%', padding: '6px' }}
          />
        </div>

        {/* EMAIL */}
        <div style={{ marginBottom: '15px' }}>
          <label>E-mail:</label><br />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="example@email.com"
            required
            style={{ width: '100%', padding: '6px' }}
          />
          {emailError && (
            <p style={{ color: 'red', fontSize: '0.9em' }}>{emailError}</p>
          )}
        </div>

        <div style={{ marginTop: '10px' }}>
          <button type="submit" disabled={loading}>
            {loading ? '처리 중...' : '회원가입'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            style={{ marginLeft: '10px' }}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;