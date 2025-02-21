import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from '../components/navbar';
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "Tomas Ndlate",
  description: "Tomas Ndlate portfolio",
  icons: {
    icon:"/images/portfolio-icon-white.png",
    apple:"/images/portfolio-icon-white.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative z-10">
          <div className="flex flex-col gap-7">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
