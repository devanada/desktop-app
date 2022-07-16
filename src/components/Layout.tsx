import React from "react";
import Taskbar from "./Taskbar";

interface layoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: layoutProps) {
  return (
    <div className="w-full h-screen bg-slate-600 flex flex-col overflow-hidden">
      <div className="w-full flex-1">{children}</div>
      <Taskbar />
    </div>
  );
}
