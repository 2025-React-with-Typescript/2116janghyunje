import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
    email: "",
  });

  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const trimmed = value.trimStart(); // 앞 공백 제거
    setForm({ ...form, [name]: trimmed });
    validate(name, trimmed);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validate = (name: string, value: string) => {
    let msg = "";

    switch (name) {
      case "username":
        if (!/^[A-Za-z][A-Za-z0-9._-]{5,9}$/.test(value)) {
          msg = "영문 시작, 영문/숫자/._- 가능 (6~10자)";
        }
        break;

      case "password":
        if (value.length < 8 || value.length > 12) {
          msg = "비밀번호는 8~12자여야 합니다.";
        } else if (/['";#%=]/.test(value) || /--/.test(value)) {
          msg = "SQL 관련 특수문자는 사용할 수 없습니다.";
        }
        break;

      case "passwordConfirm":
        if (value !== form.password) {
          msg = "비밀번호가 일치하지 않습니다.";
        }
        break;

      case "email":
        if (!/^[\w._%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(value)) {
          msg = "올바른 이메일 형식이 아닙니다.";
        }
        break;

      case "nickname":
        if (value.trim() === "") {
          msg = "닉네임을 입력해주세요.";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  const isValid =
    Object.values(errors).every((e) => e === "") &&
    Object.values(form).every((v) => v !== "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Object.entries(form).forEach(([key, value]) => validate(key, value));
    if (!isValid) {
      alert("입력 조건을 다시 확인해주세요.");
      return;
    }

    alert("회원가입 성공! (현재는 프론트 검증만 수행)");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="bg-white shadow-lg rounded-2xl w-96 p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          회원가입
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            name="username"
            type="text"
            placeholder="아이디"
            value={form.username}
            error={errors.username}
            touched={touched.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            name="password"
            type="password"
            placeholder="비밀번호"
            value={form.password}
            error={errors.password}
            touched={touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호 확인"
            value={form.passwordConfirm}
            error={errors.passwordConfirm}
            touched={touched.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            name="nickname"
            type="text"
            placeholder="닉네임"
            value={form.nickname}
            error={errors.nickname}
            touched={touched.nickname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            name="email"
            type="email"
            placeholder="이메일"
            value={form.email}
            error={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <button
            type="submit"
            disabled={!isValid}
            className={`mt-4 py-2 rounded-lg text-white font-semibold transition-all duration-200 ${
              isValid
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            회원가입
          </button>

          <Link
            to="/"
            className="block text-center text-sm text-gray-500 hover:text-blue-500"
          >
            취소
          </Link>
        </form>
      </div>
    </div>
  );
};

const InputField = ({
  name,
  type,
  placeholder,
  value,
  error,
  touched,
  onChange,
  onBlur,
}: {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error: string;
  touched?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}) => {
  const borderColor = error
    ? "border-red-500 focus:ring-red-500"
    : value
    ? "border-green-400 focus:ring-green-400"
    : "border-gray-300 focus:ring-blue-300";

  return (
    <div className="flex flex-col">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`p-2 border ${borderColor} rounded-md focus:outline-none focus:ring-2 transition-all`}
      />
      {touched && error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};

export default Signup;
