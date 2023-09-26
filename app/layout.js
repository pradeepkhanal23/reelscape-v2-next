import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Reelscape V2",
  description: "Movie guide and rating website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
