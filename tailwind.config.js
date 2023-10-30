/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: "hsl(246deg 80% 60% / <alpha-value>)",
                violet: "hsl(264deg 64% 52% / <alpha-value>)",
                red: "hsl(348deg 100% 68% / <alpha-value>)",
                "light-red": "hsl(15deg 100% 70% / <alpha-value>)",
                "soft-blue": "hsl(195deg 74% 62% / <alpha-value>)",
                "lime-green": "hsl(145deg 58% 55% / <alpha-value>)",
                "soft-orange": "hsl(43deg 84% 65% / <alpha-value>)",
                "very-dark-blue": "hsl(226deg 43% 10%)",
                "dark-blue": "hsl(235deg 46% 20%)",
                "dark-blue-hover": "hsl(235deg 46% 30%)",
                "desaturated-blue": "hsl(235deg 45% 61%)",
                "pale-blue": "hsl(236deg 100% 87%)",
            },
        },
    },
    plugins: [],
};
