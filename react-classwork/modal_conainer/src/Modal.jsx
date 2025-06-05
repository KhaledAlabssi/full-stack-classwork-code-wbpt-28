import React from "react";

export default function Modal({setModal, children}) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-amber-400/40">
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-neutral-300 w-1/2 h-1/3 relative">
          I'm a modal....
          <button className="btn absolute top-4 right-4" onClick={() => setModal(false)}>
            X
          </button>

          {children}
        </div>
      </div>
    </div>
  );
}
