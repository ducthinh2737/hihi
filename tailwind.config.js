/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#E11D48', // Màu đỏ thương hiệu (Rose-600)
                dark: '#1F2937',    // Màu xám đậm
            }
        },
    },
    plugins: [],
}