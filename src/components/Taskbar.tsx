import { useEffect, useState } from "react";
import {
  SiWindows,
  SiPowershell,
  SiGooglechrome,
  SiVisualstudiocode,
} from "react-icons/si";
import { Tooltip, Menu, Divider } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";

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
  const [timeNow, setTimeNow] = useState<string>(dayjs().format());
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
      setTimeNow(dayjs().format());
    }, 1000);
    return () => clearInterval(interval);
  }, [timeNow]);

  return (
    <div className="w-full sticky bottom-0 bg-neutral-800/70 h-8 flex justify-between pr-3 z-10">
      <div className="flex gap-2 h-full">
        {menus.map((menu: any) => (
          <Tooltip key={menu.id} label={menu.title} openDelay={1500}>
            <div
              id={menu.id}
              className="w-full h-full hover:bg-slate-700 active:bg-slate-800 flex items-center px-2"
              onClick={menu.onClick}
            >
              <menu.icon className="text-xl text-white" />
            </div>
          </Tooltip>
        ))}
      </div>
      <Tooltip
        label={dayjs(timeNow).format("dddd, MMMM DD, YYYY")}
        openDelay={1500}
      >
        <Menu
          position="top"
          placement="center"
          className="w-full h-full"
          classNames={{
            body: "bg-neutral-800 border-0",
          }}
          size="xl"
          radius={0}
          control={
            <div className="w-full h-full hover:bg-slate-700 active:bg-slate-800 px-2 flex items-center">
              <p className="text-base text-white cursor-default">
                {dayjs(timeNow).format("h:mm A")}
              </p>
            </div>
          }
        >
          <div className="px-3 py-5">
            <p className="text-5xl text-white">
              {dayjs(timeNow).format("h:mm:ss A")}
            </p>
            <p className="text-base text-white">
              {dayjs(timeNow).format("dddd, MMMM DD, YYYY")}
            </p>
          </div>
          <Divider />
          <Calendar
            classNames={{
              calendarHeaderControl: "text-white hover:text-black",
              calendarHeaderLevel: "text-white hover:text-black",
              calendarHeaderLevelIcon: "text-white hover:text-black",
              yearPickerControl: "text-white hover:text-black",
              yearPickerControlActive: "bg-blue-500 text-white",
              monthPickerControl: "text-white hover:text-black",
              monthPickerControlActive: "bg-blue-500 text-white",
              weekday: "text-white",
              day: "text-white hover:text-black",
            }}
            value={new Date()}
            fullWidth
            onChange={() => null}
          />
          <Divider />
        </Menu>
      </Tooltip>
    </div>
  );
}
