import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Desktop from "../pages/Desktop";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="*" element={<Desktop />} />
      </Routes>
    </BrowserRouter>
  );
}
