import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: "normal", 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "FutRetro",
  description: "Loja de camisas antigas para amantes e colecionadores de futebol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}  
        
      </body>
    </html>
  );
}
