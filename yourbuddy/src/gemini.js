import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key from environment variables
const API_KEY = import.meta.env.VITE_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-preview-05-20", // use stable model name
});

const generateConfig = {
  temperature: 1,
  maxOutputTokens: 24,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generateConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}

export default run;
