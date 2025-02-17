"use client"

import { useEffect, useState } from "react"
import { useBitteWallet, Wallet } from "@bitte-ai/react";
import { BitteAiChat } from "@bitte-ai/chat";
import "@bitte-ai/chat/style.css";


const colors = {
  generalBackground:"#fff",
  messageBackground: "#ccc",
  textColor: "#000",
  buttonColor: "#000",
  borderColor: "#000"
}

export default function Chat() {
  const { selector } = useBitteWallet();
  const [wallet, setWallet] = useState<Wallet>();

  useEffect(() => {
    const fetchWallet = async () => {
      const walletInstance = await selector.wallet();
      setWallet(walletInstance);
    };
    if (selector) fetchWallet();
  }, [selector]);

  return (
    <BitteAiChat
      agentid="your-agent-id"
      apiUrl="/api/chat"
      wallet={{ near: { wallet } }}
      welcomeMessageComponent={<>Hello</>}
      colors={ colors }
    />
  );
}