import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Login from "@/components/Login";

export const metadata: Metadata = {
  title: "Drink | The Coming of Stages",
  description: "The Coming of Stages x Loveis Cafe Drink Order Platform",
  icons: {
    icon: "/tcos.png",
  },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
        <body>
          <Toaster />
          <AppContextProvider>
            <Login/>
            {children}
          </AppContextProvider>
        </body>
      </html>
  );
}
