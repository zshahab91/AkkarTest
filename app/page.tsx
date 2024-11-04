"use client";
import MainPage from "@/components/mainPage";
import ReduxProvider from "@/store/redux-provider";
import { useEffect, useState } from "react";
const Home = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    isClient ?
      <ReduxProvider>
        <main className="justify-center items-center p-4">
          <MainPage />
        </main>
      </ReduxProvider> : ''
  );
};
export default Home;