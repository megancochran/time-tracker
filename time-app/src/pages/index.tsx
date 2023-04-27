import { Pause } from "@/icons/Pause.icon";
import { useState } from "react";
export default function Home() {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const handleStartSessionClick = () => {
    setIsSessionActive(true);
  };
  if (!isSessionActive)
    return (
      <div className="flex h-screen min-w-full flex-col flex-wrap content-center justify-center gap-y-8 bg-white">
        <h1 className="text-grey-800">00:00:00</h1>
        <button className="h-12 w-40 self-center rounded-md bg-blue-200 text-grey-800">
          <h3>Start Session</h3>
        </button>
      </div>
    );
  if (isSessionActive)
    return (
      <div className="flex h-screen min-w-full flex-col flex-wrap content-center justify-center gap-y-8 bg-white">
        <h1 className="text-grey-800">00:00:00</h1>
        <button className="h-12 w-20 justify-items-center self-center rounded-md bg-blue-200 text-grey-800">
          <div className="flex max-w-full justify-self-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7778 16C11.6732 16 10.7778 15.1046 10.7778 14V2C10.7778 0.895431 11.6732 0 12.7778 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H12.7778ZM2 16C0.895431 16 0 15.1046 0 14V2C0 0.895431 0.895431 0 2 0H3.22223C4.3268 0 5.22223 0.895431 5.22223 2V14C5.22223 15.1046 4.3268 16 3.22223 16H2Z"
                fill="black"
              />
            </svg>
          </div>
        </button>
        <button className="h-12 w-20 self-center rounded-md bg-grey-200 text-grey-800">
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.2222 16C1.6074 16 1.08333 15.7833 0.65 15.35C0.216667 14.9167 0 14.3926 0 13.7778V2.2222C0 1.6074 0.216667 1.08333 0.65 0.65C1.08333 0.216667 1.6074 0 2.2222 0H13.7778C14.3926 0 14.9167 0.216667 15.35 0.65C15.7833 1.08333 16 1.6074 16 2.2222V13.7778C16 14.3926 15.7833 14.9167 15.35 15.35C14.9167 15.7833 14.3926 16 13.7778 16H2.2222Z"
                fill="#343A40"
              />
            </svg>
          </div>
        </button>
      </div>
    );
}
