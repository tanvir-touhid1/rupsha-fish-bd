import React from "react";
import { useLocation } from "react-router-dom";

export default function RouterDebug() {
  const loc = useLocation();
  return (
    <div
      style={{
        position: "fixed",
        bottom: 8,
        left: 8,
        zIndex: 9999,
        background: "rgba(0,0,0,0.7)",
        color: "white",
        padding: "6px 8px",
        fontSize: 12,
        borderRadius: 8,
        maxWidth: "90vw",
        wordBreak: "break-all",
      }}
    >
      <div><b>pathname:</b> {loc.pathname}</div>
      <div><b>hash:</b> {loc.hash}</div>
      <div><b>search:</b> {loc.search}</div>
    </div>
  );
}
