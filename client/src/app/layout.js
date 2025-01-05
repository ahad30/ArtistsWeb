"use client";
import { useEffect, useState } from "react";
import store from "@/redux/store/store";
import "./globals.css";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { LanguageContextProvider } from "@/context/LanguageContext";
import localFont from "next/font/local";
import { LoadingPage } from "@/components/LoadingPage/LoadingPage";

// Define the font loader at the top level
// const myFont = localFont({
//   src: "./KalpurushANSI.woff2",
//   display: "swap",
// });

export default function RootLayout({ children }) {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <html lang="en" >
      <body>
        {/* {isLoading ? (
          <div>
            <LoadingPage />
          </div>
        ) : ( */}
          <Provider store={store}>
            <Toaster expand={true} richColors />
           
              <div className="">{children}</div>
          </Provider>
        {/* )} */}
      </body>
    </html>
  );
}
