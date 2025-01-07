module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61", // Custom primary color
        secondary: "#374151",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add custom fonts
      },
      spacing: {
        128: "32rem", // Add custom spacing values
      },
      borderRadius: {
        xl: "1.5rem", // Custom border-radius
      },
    },
  },
  plugins: [],
};
