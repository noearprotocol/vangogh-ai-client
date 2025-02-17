"use client"
import Image from "next/image";
import Chat from "./components/Chat";
import { BitteWalletContextProvider } from "@bitte-ai/react";

export default function Home() {
  return (
    <BitteWalletContextProvider network="mainnet">
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image src={"/van.webp"} width={300} height={300} alt="VanGogh AI" unoptimized/>

     <Chat />

    </div>
    </BitteWalletContextProvider>
  );
}
