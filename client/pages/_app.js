import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "flowbite";
// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import ChatProvider from "../Context/ChatProvider";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <ChatProvider>
        {router.pathname === "/auth" ||
        router.pathname === "/chats" ||
        router.pathname === "/" ? (
          <ChakraProvider>
            <div>
              <Component {...pageProps} />
            </div>
          </ChakraProvider>
        ) : (
          <div className="">
            <div className="flex flex-row h-max">
              <div className="w-[23%]">
                <Sidebar />
              </div>
              <div className="w-[100%] ">
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        )}
      </ChatProvider>
    </>
  );
}

export default MyApp;
