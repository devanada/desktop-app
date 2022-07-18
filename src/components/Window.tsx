import React, { useState } from "react";
import {
  VscChromeMinimize as Minimize,
  VscChromeMaximize as Maximize,
  VscChromeRestore as Restore,
  VscChromeClose as Close,
} from "react-icons/vsc";
import { Rnd } from "react-rnd";

interface windowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  handleClose?: () => void;
}

interface sizeType {
  x: number;
  y: number;
  width: number | string;
  height: number | string;
}

const MENU_WINDOW =
  "h-full hover:bg-neutral-600 active:bg-slate-800 px-3 flex items-center";
const MENU_WINDOW_ITEM = "text-xl text-white";

export default function Window({
  id,
  title,
  children,
  handleClose,
}: windowProps) {
  const [menus] = useState<string[]>(["vscode", "chrome", "cmd"]);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [size, setSize] = useState<sizeType>({
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  });

  const handleResize = (resize: boolean) => {
    setIsFullScreen(resize);
    setSize(
      resize
        ? { x: 0, y: 0, width: "100%", height: "100%" }
        : { x: 0, y: 0, width: 800, height: 600 }
    );
  };

  const handleZindex = (zIndex: string) => {
    menus.forEach((menu) => {
      if (document.getElementById(menu)) {
        document.getElementById(menu)!.style.zIndex = "0";
      }
    });
    document.getElementById(id)!.style.zIndex = zIndex !== "" ? zIndex : "10";
  };

  return (
    <Rnd
      id={id}
      className="border border-black bg-neutral-800 flex flex-col overflow-hidden max-w-full max-h-full"
      default={size}
      size={size}
      position={size}
      minHeight={100}
      minWidth={100}
      enableResizing={!isFullScreen}
      disableDragging={isFullScreen}
      bounds="parent"
      onMouseDown={() => handleZindex("")}
      onDragStop={(e, d) => {
        setSize({ ...size, x: d.x, y: d.y });
      }}
      onResize={(e, direction, ref, delta, position) => {
        setSize({
          ...position,
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }}
    >
      <div className="w-full h-8 bg-neutral-800 flex justify-between items-center px-3">
        <div className="basis-1/3" />
        <p className="basis-1/3 text-white text-center font-normal">{title}</p>
        <div className="flex basis-1/3 items-center justify-end h-full gap-1">
          <div className={MENU_WINDOW} onClick={handleClose}>
            <Minimize className={MENU_WINDOW_ITEM} />
          </div>
          <div
            className={MENU_WINDOW}
            onClick={() => {
              handleResize(isFullScreen ? false : true);
              handleZindex("10");
            }}
          >
            {isFullScreen ? (
              <Restore className={MENU_WINDOW_ITEM} />
            ) : (
              <Maximize className={MENU_WINDOW_ITEM} />
            )}
          </div>
          <div className={MENU_WINDOW} onClick={handleClose}>
            <Close className={MENU_WINDOW_ITEM} />
          </div>
        </div>
      </div>
      {children}
      {isFullScreen && <div className="h-8 bg-transparent" />}
    </Rnd>
  );
}
