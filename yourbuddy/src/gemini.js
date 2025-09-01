import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

async function run(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text:
              prompt + " (answer in two-three simple sentence, no formatting)",
          },
        ],
      },
    ],
    generationConfig: {
      maxOutputTokens: 24, // limit response length
    },
    config: {
      thinkingConfig: {
        thinkingBudget: 0, // Disables "chain-of-thought" reasoning
      },
    },
  });

  return response.text;
}

export default run;
