import localFont from "next/font/local";

// Load the San Francisco Pro font from the local public directory
export const sanFranciscoPro = localFont({
  src: "../../public/fonts/san-francisco-pro/SF-Pro.ttf",
  variable: "--font-sf-pro", // This creates a CSS variable for the font
  display: "swap", // This ensures text remains visible during font loading
});
