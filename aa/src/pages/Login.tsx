import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value.trimStart() });
    validate(name, value.trimStart());
  };

  const validate = (name: string, value: string) => {
    let msg = "";
    if (name === "username" && !/^[A-Za-z][A-Za-z0-9._-]{5,9}$/.test(value)) {
      msg = "아이디 형식이 올바르지 않습니다.";
    }
    if (name === "password") {
      if (value.length < 8 || value.length > 12)
        msg = "비밀번호는 8~12자여야 합니다.";
      else if (/['";#%=]/.test(value) || /--/.test(value))
        msg = "SQL 관련 특수문자는 사용할 수 없습니다.";
    }
    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  const isValid =
    Object.values(errors).every((e) => e === "") &&
    Object.values(form).every((v) => v !== "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      alert("입력 조건을 다시 확인해주세요.");
      return;
    }
    alert("로그인 성공! (현재는 프론트 검증만 수행)");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="bg-white shadow-lg rounded-2xl w-96 p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          로그인
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            name="username"
            type="text"
            placeholder="아이디"
            value={form.username}
            error={errors.username}
            onChange={handleChange}
          />
          <InputField
            name="password"
            type="password"
            placeholder="비밀번호"
            value={form.password}
            error={errors.password}
            onChange={handleChange}
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
            로그인
          </button>

          <Link
            to="/Signup"
            className="block text-center text-sm text-gray-500 hover:text-blue-500"
          >
            회원가입
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
  onChange,
}: {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        className={`p-2 border ${borderColor} rounded-md focus:outline-none focus:ring-2 transition-all`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Login;
