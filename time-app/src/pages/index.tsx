import { Pause } from "@/icons/Pause.icon";
import { useState } from "react";
export default function Home() {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isSessionPaused, setIsSessionPaused] = useState(false);
  const handleStartSessionClick = () => {
    setIsSessionActive(true);
  };
  const handlePauseSessionClick = () => {
    if (isSessionActive) {
      setIsSessionPaused(true);
    }
  };
  const handlePlaySessionClick = () => {
    if (isSessionActive) {
      setIsSessionPaused(false);
    }
  };

  // SESSION HAS NOT STARTED
  if (!isSessionActive)
    return (
      <div className="flex h-screen min-w-full flex-col flex-wrap content-center justify-center gap-y-8 bg-white">
        <h1 className="text-grey-800">00:00:00</h1>
        <button
          onClick={handleStartSessionClick}
          className="h-12 w-40 self-center rounded-md bg-blue-200 text-grey-800"
        >
          <h3>Start Session</h3>
        </button>
      </div>
    );

  // SESSION IS ACTIVE AND IS RUNNING
  if (isSessionActive && !isSessionPaused)
    return (
      <div className="flex h-screen min-w-full flex-col flex-wrap content-center justify-center gap-y-8 bg-white">
        <h1 className="text-grey-800">00:00:00</h1>
        <button
          onClick={handlePauseSessionClick}
          className="h-12 w-20 justify-items-center self-center rounded-md bg-blue-200 text-grey-800"
        >
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

        <label
          htmlFor="my-modal"
          className="btn h-12 w-20 self-center rounded-md bg-grey-200 text-grey-800"
        >
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
        </label>
        {/* End SESSION MODAL */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box bg-white">
            <h3 className="text-lg font-bold text-grey-800">Done?</h3>
            <p className="py-4 text-grey-600">
              Would you like to end your session and continue to the session
              summary?
            </p>
            <div className="modal-action">
              <div className="flex w-full flex-wrap gap-2">
                <label
                  htmlFor="my-modal"
                  className="btn h-12 w-40 w-full self-center rounded-md border-none bg-blue-200 normal-case text-grey-800"
                >
                  End Session
                </label>
                <label
                  htmlFor="my-modal"
                  className="btn h-12 w-40 w-full self-center rounded-md border-none bg-grey-200 normal-case text-grey-800"
                >
                  Cancel
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  // SESSION IS ACTIVE AND USER HAS PAUSED SESSION
  if (isSessionActive && isSessionPaused)
    return (
      <div className="flex h-screen min-w-full flex-col flex-wrap content-center justify-center gap-y-8 bg-white">
        <h1 className="text-grey-800">00:00:00</h1>
        <button
          onClick={handlePlaySessionClick}
          className="h-12 w-20 justify-items-center self-center rounded-md bg-blue-200 text-grey-800"
        >
          <div className="flex max-w-full justify-self-center">
            <svg
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.7 16.7047C1.32962 16.9492 0.9537 16.9621 0.572233 16.7436C0.190744 16.5251 0 16.1936 0 15.7492V1.14917C0 0.704726 0.190744 0.373236 0.572233 0.154703C0.9537 -0.0638084 1.32962 -0.050841 1.7 0.193604L13.1889 7.51584C13.5296 7.73806 13.7 8.04917 13.7 8.44917C13.7 8.84917 13.5296 9.16028 13.1889 9.3825L1.7 16.7047Z"
                fill="black"
              />
            </svg>
          </div>
        </button>
        <label
          htmlFor="my-modal"
          className="btn h-12 w-20 self-center rounded-md bg-grey-200 text-grey-800"
        >
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
        </label>
        {/* End SESSION MODAL */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box bg-white">
            <h3 className="text-lg font-bold text-grey-800">Done?</h3>
            <p className="py-4 text-grey-600">
              Would you like to end your session and continue to the session
              summary?
            </p>
            <div className="modal-action">
              <div className="flex w-full flex-wrap gap-2">
                <label
                  htmlFor="my-modal"
                  className="btn h-12 w-40 w-full self-center rounded-md border-none bg-blue-200 normal-case text-grey-800"
                >
                  End Session
                </label>
                <label
                  htmlFor="my-modal"
                  className="btn h-12 w-40 w-full self-center rounded-md border-none bg-grey-200 normal-case text-grey-800"
                >
                  Cancel
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
