import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });


export const metadata = {
  title: "Sedaunergi",
  description: "Coal Mining Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
