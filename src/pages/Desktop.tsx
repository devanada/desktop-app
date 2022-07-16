import { useState } from "react";
import Taskbar from "../components/Taskbar";
import Window from "../components/Window";

interface windowProps {
  handleClose?: () => void;
}

function Chrome({ handleClose }: windowProps) {
  return (
    <Window title="Chrome" handleClose={handleClose}>
      <iframe
        className="w-full h-full"
        title="I1"
        src="https://www.google.com/webhp?igu=1"
      />
    </Window>
  );
}

function VSCode({ handleClose }: windowProps) {
  return (
    <Window title="desktop-app - Visual Studio Code" handleClose={handleClose}>
      <iframe
        className="w-full h-full"
        title="I1"
        src="https://github1s.com/devanada/desktop-app"
      />
    </Window>
  );
}

export default function Desktop() {
  const [showChrome, setShowChrome] = useState(false);
  const [showVSCode, setShowVSCode] = useState(false);

  return (
    <div className="w-full h-screen bg-slate-600 flex flex-col overflow-hidden">
      <div className="w-full flex-grow">
        {showChrome && <Chrome handleClose={() => setShowChrome(false)} />}
        {showVSCode && <VSCode handleClose={() => setShowVSCode(false)} />}
      </div>
      <Taskbar
        onClickChrome={() => setShowChrome(!showChrome)}
        onClickVSCode={() => setShowVSCode(!showVSCode)}
      />
    </div>
  );
}
