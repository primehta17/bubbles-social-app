import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import StoreProvider  from './redux/StoreProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
       <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </StoreProvider>
   
  );
}
