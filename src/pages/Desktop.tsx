import { useState } from "react";
import Taskbar from "../components/Taskbar";
import Frame from "../components/Frame";

export default function Desktop() {
  const [showChrome, setShowChrome] = useState(false);
  const [showVSCode, setShowVSCode] = useState(false);
  const [showCMD, setShowCMD] = useState(false);

  return (
    <div className="w-full h-screen bg-[url(https://cdn.wallpapersafari.com/34/46/Thrfa3.jpg)] bg-center bg-cover bg-no-repeat flex flex-col overflow-hidden">
      <div className="w-full flex-grow max-w-full max-h-full overflow-hidden">
        {showChrome && (
          <Frame
            id="chrome"
            title="Chrome"
            src="https://www.google.com/webhp?igu=1"
            handleClose={() => setShowChrome(false)}
          />
        )}
        {showVSCode && (
          <Frame
            id="vscode"
            title="desktop-app - Visual Studio Code"
            src="https://github1s.com/devanada/desktop-app"
            handleClose={() => setShowVSCode(false)}
          />
        )}
        {showCMD && (
          <Frame
            id="cmd"
            title="Command Prompt"
            src="https://cmd.to"
            handleClose={() => setShowCMD(false)}
          />
        )}
      </div>
      <Taskbar
        onClickChrome={() => setShowChrome(!showChrome)}
        onClickVSCode={() => setShowVSCode(!showVSCode)}
        onClickCMD={() => setShowCMD(!showCMD)}
      />
    </div>
  );
}
