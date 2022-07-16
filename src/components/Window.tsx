import React, { useState } from "react";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";
import { Rnd } from "react-rnd";

interface windowProps {
  title: string;
  children: React.ReactNode;
  handleClose?: () => void;
}

const MENU_WINDOW =
  "h-full hover:bg-neutral-600 active:bg-slate-800 px-3 flex items-center";
const MENU_WINDOW_ITEM = "text-xl text-white";

export default function Window({ title, children, handleClose }: windowProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [size, setSize] = useState<any>({
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

  return (
    <Rnd
      className="relative border border-black bg-gray-700 flex flex-col"
      default={size}
      size={size}
      position={size}
      minHeight={300}
      minWidth={400}
      enableResizing={!isFullScreen}
      disableDragging={isFullScreen}
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
            <VscChromeMinimize className={MENU_WINDOW_ITEM} />
          </div>
          <div
            className={MENU_WINDOW}
            onClick={() => handleResize(isFullScreen ? false : true)}
          >
            <VscChromeMaximize className={MENU_WINDOW_ITEM} />
          </div>
          <div className={MENU_WINDOW} onClick={handleClose}>
            <VscChromeClose className={MENU_WINDOW_ITEM} />
          </div>
        </div>
      </div>
      {children}
    </Rnd>
  );
}
