/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#4F46E5",
                
        "secondary": "#ffffff",
                
        "accent": "#ffffff",
                
        "neutral": "#ffffff",
                
        "base-100": "#ffffff",
                
        "info": "#ffffff",
                
        "success": "#00ffff",
                
        "warning": "#ffffff",
                
        "error": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

