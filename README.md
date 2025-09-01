# YourBuddy - AI Voice Assistant

YourBuddy is a React-based voice assistant powered by Google Gemini API.

It listens to your voice, sends the query to Gemini (gemini-2.5-flash), and speaks the response back using the browser’s Speech Recognition and Speech Synthesis APIs.

# 🚀 Features

🎤 Voice Input: Speak your query using the microphone.
🤖 AI Response: Gets concise answers from Google Gemini API.
🔊 Voice Output: Speaks the response back to you.
✂️ Cleaned Output: Removes markdown (**bold**) and limits long responses.
🌐 Deployed on Vercel with .env support for API keys.

# 🛠️ Tech Stack

Frontend: React + Vite
AI Model: Google Gemini (gemini-2.5-flash) via @google/genai
Speech: Web Speech API (SpeechRecognition, speechSynthesis)
Deployment: Vercel

## 📂 Project Structure

```
src/
 ├── context/
 │    └── UserContext.jsx   # Handles speech recognition, AI response & speech synthesis
 ├── gemini.js              # Google Gemini API helper
 ├── main.jsx               # App entry
 └── App.jsx                # Main UI

```

# ⚙️ Setup

1️⃣ Clone the repo
git clone https://github.com/yourusername/yourbuddy.git
cd yourbuddy

2️⃣ Install dependencies
npm install

3️⃣ Add your API Key - Create a .env file in project root:
VITE_API_KEY=your_api_key_here

4️⃣ Run the dev server
npm run dev

# 📸 Screenshots

1. Home page

![alt text](image.png)

# 🧑‍💻 Author

YourBuddy is built with ❤️ by Ruchi Agrawal.

Feel free to fork, contribute, or give this project a ⭐ on GitHub!
