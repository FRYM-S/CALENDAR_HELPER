/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            xs: "540px",
            sm: "576px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        }
    },

    plugins: [],
};
