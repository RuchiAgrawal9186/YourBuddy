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

  async function aiResponse(prompt) {
    console.log("promot", prompt);
      let text = await run(prompt);
      if (!text)
      {
          return
          }
    // replace all "google" with "Ruchi Agrawal"
    // let newtext = text.replace(/google/gi, "Ruchi Agrawal");
      
    setAiResponse(true);
    setPrompt(text);
    speak(text);

    
    //   takeCommand(newtext?.toLowerCase());

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
    console.log(transcript, "transcript");
    setPrompt(transcript);
    aiResponse(transcript);
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
