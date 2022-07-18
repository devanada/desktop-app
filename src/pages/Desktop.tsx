import { useState } from "react";
import Taskbar from "../components/Taskbar";
import Window from "../components/Window";

interface windowProps {
  handleClose?: () => void;
}

function Chrome({ handleClose }: windowProps) {
  return (
    <Window id="chrome" title="Chrome" handleClose={handleClose}>
      <iframe
        className="w-full h-full"
        title="Chrome window"
        src="https://www.google.com/webhp?igu=1"
      />
    </Window>
  );
}

function VSCode({ handleClose }: windowProps) {
  return (
    <Window
      id="vscode"
      title="desktop-app - Visual Studio Code"
      handleClose={handleClose}
    >
      <iframe
        className="w-full h-full"
        title="VS Code window"
        src="https://github1s.com/devanada/desktop-app"
      />
    </Window>
  );
}

function CMD({ handleClose }: windowProps) {
  return (
    <Window id="cmd" title="Command Prompt" handleClose={handleClose}>
      <iframe
        className="w-full h-full"
        title="CMD window"
        src="https://cmd.to"
      />
    </Window>
  );
}

export default function Desktop() {
  const [showChrome, setShowChrome] = useState(false);
  const [showVSCode, setShowVSCode] = useState(false);
  const [showCMD, setShowCMD] = useState(false);

  return (
    <div className="w-full h-screen bg-[url(https://cdn.wallpapersafari.com/34/46/Thrfa3.jpg)] bg-center bg-cover bg-no-repeat flex flex-col overflow-hidden">
      <div className="w-full flex-grow overflow-hidden">
        {showChrome && <Chrome handleClose={() => setShowChrome(false)} />}
        {showVSCode && <VSCode handleClose={() => setShowVSCode(false)} />}
        {showCMD && <CMD handleClose={() => setShowCMD(false)} />}
      </div>
      <Taskbar
        onClickChrome={() => setShowChrome(!showChrome)}
        onClickVSCode={() => setShowVSCode(!showVSCode)}
        onClickCMD={() => setShowCMD(!showCMD)}
      />
    </div>
  );
}
