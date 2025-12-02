/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")], // ✅ DaisyUI 활성화
    daisyui: {
        themes: ["light", "dark"], // 원하는 테마 선택 가능
    },
}
