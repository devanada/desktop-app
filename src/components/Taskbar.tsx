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
  onClickCMD?: () => void;
  onClickVSCode?: () => void;
}

export default function Taskbar({
  onClickStart,
  onClickChrome,
  onClickCMD,
  onClickVSCode,
}: taskbarProps) {
  const [timeNow, setTimeNow] = useState<string>(moment().format("HH:mm A"));
  const [menus] = useState<any>([
    {
      id: "tb-start",
      icon: SiWindows,
      title: "Start",
      onClick: onClickStart,
    },
    {
      id: "tb-chrome",
      icon: SiGooglechrome,
      title: "Google Chrome",
      onClick: onClickChrome,
    },
    {
      id: "tb-cmd",
      icon: SiPowershell,
      title: "Command Prompt",
      onClick: onClickCMD,
    },
    {
      id: "tb-vscode",
      icon: SiVisualstudiocode,
      title: "Visual Studio Code",
      onClick: onClickVSCode,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(moment().format("HH:mm A"));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeNow]);

  return (
    <div className="w-full sticky bottom-0 bg-black/70 h-8 flex justify-between px-3">
      <div className="flex gap-3 h-full">
        {menus.map((menu: any) => (
          <div
            id={menu.id}
            key={menu.id}
            className="hover:bg-slate-700 active:bg-slate-800 px-2 flex items-center"
            onClick={menu.onClick}
          >
            <menu.icon className="text-2xl text-white" />
          </div>
        ))}
      </div>
      <div className="hover:bg-slate-700 active:bg-slate-800 px-2 flex items-center">
        <p className="text-base text-white">{timeNow}</p>
      </div>
    </div>
  );
}
