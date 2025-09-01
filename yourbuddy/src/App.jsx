import { Fragment, useContext, useState } from "react";
import { IconMicrophone } from "@tabler/icons-react";
import speak from "./assets/speak.gif";
import logo from "./assets/logo1.gif";
import "./App.css";
import { userContext } from "./context/userContext";

function App() {
  const {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    Response,
    setPrompt,
    setAiResponse,
  } = useContext(userContext);
  const handleClick = () => {
    setAiResponse(false);
    setPrompt("Listening...");
    setSpeaking(true);

    recognition.start();
  };
  return (
    <Fragment>
      <div className="flex items-center justify-center min-h-screen bg-gray-800 p-4 font-sans text-white">
        <div className="bg-black rounded-2xl shadow-2xl p-6 sm:p-8 md:p-9 max-w-lg w-full flex flex-col items-center text-center space-y-8">
          {/* Animated AI character image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 border-white-2">
            {/* Using a friendly image that works on dark backgrounds */}
            <img
              src={
                logo
                  ? logo
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rl-R5jIM8tUlg6-kgD2TN10VtwugHYqLcZMMztqJZmDolJ_RsbFy8_MJRXmQf1EhR3Y&usqp=CAU"
              }
              alt="Your Buddy AI character"
              className="w-full h-full object-fill"
            />
          </div>

          {/* Heading with the gradient text effect */}
          <h1 className="text-3xl sm:text-3xl md:text-3xl font-extrabold tracking-tight leading-tight -mt-10">
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
              Hi, I'm Your Buddy,{" "}
            </span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
              Virtual Assistant
            </span>
          </h1>

          {/* Action button */}

          {!speaking ? (
            <button
              onClick={handleClick}
              className=" flex gap-2 text-1xl items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {"Speak"}
              <span>
                <IconMicrophone width="20" height="20" />
              </span>
            </button>
          ) : (
            <div>
              {Response ? (
                <img
                  src="https://i.pinimg.com/originals/a9/4a/ee/a94aee835e16cff4f14c83dac8ffbe10.gif"
                  alt="speak_image"
                  className="h-24 w-full"
                />
              ) : (
                <img
                  src="https://i.pinimg.com/originals/ff/04/31/ff0431d11ff6b73e937280252f58f371.gif"
                  alt="speak_image"
                  className="h-24 w-full"
                />
              )}

              <p className="text-white text-sm">{prompt}</p>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
