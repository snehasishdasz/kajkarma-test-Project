// app/fonts.ts (or wherever you prefer)
import { Poppins, Inter } from "next/font/google";


export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const poppinsRegular = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins-regular",
});

export const poppinsMedium = Poppins({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-poppins-medium",
});
