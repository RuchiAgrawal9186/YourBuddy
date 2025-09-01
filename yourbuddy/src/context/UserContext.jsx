import React, { createContext, useState } from "react";
import run from "../gemini";

export const userContext = createContext();

const UserContext = ({ children }) => {
  let [speaking, setSpeaking] = useState(false);
  const [prompt, setPrompt] = useState("Listening...");
  const [Response, setAiResponse] = useState(false);

  const speak = (text) => {
    if (!text) {
      return;
    }
    // Cancel previous speech
    window.speechSynthesis.cancel();
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "en-GB";

    window.speechSynthesis.speak(text_speak);
  };

  function cleanText(text) {
    return text
      .replace(/\*\*/g, "") // remove bold
      .replace(/\*/g, "") // remove italic
      .replace(/#+/g, "") // remove headings
      .replace(/google/gi, "Ruchi Agrawal")
      .trim();
  }

  async function aiResponse(prompt) {
 
    let text = await run(prompt);

    let clean = cleanText(text);

    // Keep only first sentence
    let shortText = clean.split(".")[0] + ".";


    setAiResponse(true);
    setPrompt(shortText);
    speak(shortText);

  
    setTimeout(() => {
      setSpeaking(false);
    }, 5000);
  }

  let speechRecognization =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new speechRecognization();
  recognition.onresult = (e) => {
    let cuurentIndex = e?.resultIndex;
    let transcript = e?.results?.[cuurentIndex]?.[0]?.transcript;
    setPrompt(transcript);
    
    // Avoid unhandled async promise
  aiResponse(transcript).catch((err) => console.error(err));
  };

  const value = {
    speak,
    recognition,
    speaking,
    setSpeaking,
    prompt,
    setPrompt,
    Response,
    setAiResponse,
  };
  return (
    <div>
      <userContext.Provider value={value}>{children}</userContext.Provider>
    </div>
  );
};

export default UserContext;
