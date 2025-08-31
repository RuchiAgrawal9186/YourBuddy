import { Fragment, useState } from "react";

import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="flex  overflow-hidden items-start justify-center border-2 mx-auto h-screen bg-gray-800">
        <div className="border-red-500 mt-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilfH7Imkj0D3-pM3YsOw-Qy-wfAahkplZxA&s"
            alt="ai-image"
            className="h-70"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
