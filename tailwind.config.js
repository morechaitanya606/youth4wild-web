/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#10B981", // Deep Emerald
                "primary-hover": "#059669",
                accent: "#E27A53", // Warm Terra Cotta
                "background-light": "#FAFAFA",
                "background-dark": "#022C22", // Deep forest night for dark mode
                "surface-dark": "#064E3B",
            },
            fontFamily: {
                display: ["Outfit", "sans-serif"],
                body: ["Plus Jakarta Sans", "sans-serif"]
            },
            animation: {
                "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
                float: "float 6s ease-in-out infinite"
            },
            keyframes: {
                kenBurns: {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(1.1)" }
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" }
                }
            }
        },
    },
    plugins: [],
}
