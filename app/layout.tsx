import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./globals.css";
import Navbar from "./Navbar";
import { AuthProvider } from "@/contexts/authContext";

export const metadata: Metadata = {
  title: "Tower defence card game",
  description: "A tower defence card game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
