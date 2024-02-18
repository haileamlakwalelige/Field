import "./globals.css";
import Navbar from './components/layout/Navbar';



export const metadata = {
  title: "QuantumField",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
    </html>
  );
}

