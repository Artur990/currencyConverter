import React from "react";

export const History = () => {
  return (
    <div className="h-screen  w-screen flex justify-center 	items-center flex-col bg-slate-700">
      <h1 className="text-slate-200 m-3">Twoje historyczny wymiany</h1>
      <div
        className="w-96 h-auto bg-slate-400 flex justify-between flex-col p-6 rounded-md gap-2
      "
      >
        <div className="flex justify-between  outline  outline-2 p-4 rounded-md">
          <h1>10 PLN - 2USD</h1> <h2>2022-09-22</h2>
        </div>
      </div>
    </div>
  );
};
