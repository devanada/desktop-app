import { useEffect, useState } from "react";
import {
  SiWindows,
  SiPowershell,
  SiGooglechrome,
  SiVisualstudiocode,
} from "react-icons/si";
import moment from "moment";

interface taskbarProps {
  onClickStart?: () => void;
  onClickChrome?: () => void;
  onClickPShell?: () => void;
  onClickVSCode?: () => void;
}

const MENU_TASKBAR =
  "hover:bg-slate-700 active:bg-slate-800 px-2 flex items-center";
const MENU_TASKBAR_ITEM = "text-2xl text-white";

export default function Taskbar({
  onClickStart,
  onClickChrome,
  onClickPShell,
  onClickVSCode,
}: taskbarProps) {
  const [timeNow, setTimeNow] = useState<string>(moment().format("HH:mm A"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(moment().format("HH:mm A"));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeNow]);

  return (
    <div className="sticky bottom-0 bg-black/70 w-full h-8 flex justify-between px-3">
      <div className="flex gap-3 h-full">
        <div className={MENU_TASKBAR} onClick={onClickStart}>
          <SiWindows className={MENU_TASKBAR_ITEM} />
        </div>
        <div className={MENU_TASKBAR} onClick={onClickChrome}>
          <SiGooglechrome className={MENU_TASKBAR_ITEM} />
        </div>
        <div className={MENU_TASKBAR} onClick={onClickPShell}>
          <SiPowershell className={MENU_TASKBAR_ITEM} />
        </div>
        <div className={MENU_TASKBAR} onClick={onClickVSCode}>
          <SiVisualstudiocode className={MENU_TASKBAR_ITEM} />
        </div>
      </div>
      <div className={MENU_TASKBAR}>
        <p className="text-base text-white">{timeNow}</p>
      </div>
    </div>
  );
}
