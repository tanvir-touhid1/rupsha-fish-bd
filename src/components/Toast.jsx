// components/Toast.jsx
import React, { useEffect, useRef } from "react";

const Toast = ({ message, type = "success", onClose, duration = 3000 }) => {
  const onCloseRef = useRef(onClose);

  // always keep latest onClose without re-triggering the timer
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // start timer once per toast show (duration change is allowed)
  useEffect(() => {
    const timer = setTimeout(() => {
      onCloseRef.current?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-in slide-in-from-right`}
    >
      <div className="flex items-center gap-2">
        <span>{message}</span>
        <button
          onClick={() => onCloseRef.current?.()}
          className="text-white hover:text-gray-200 text-lg font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
