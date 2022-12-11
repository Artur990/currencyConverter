import React from "react";

const Content = () => {
  return (
    <div className="h-screen w-screen  flex justify-center 	items-center flex-col  bg-slate-700">
      {/* <div className="w-6/12 max-h-60 bg-orange  border-b-gray-light flex justify-between g-12    rounded-sm"> */}
      <div className=" bg-slate-400  w-3/4 h-32 rounded-md p-1">
        <div className=" w-full h-20   bg-slate-400 p-3 rounded-md gap-2 flex justify-between ">
          <div className="w-2/6">
            <h2 className="w-full text-lg font-bold text-left">Amount</h2>
            <input type="string" className="w-full" />
          </div>
          <div className="w-2/6">
            <h2 className="w-full text-lg font-bold text-left">From</h2>
            <select className="w-full font-bold  text-slate-700 ">
              <option label="PLM">PLN</option>
              <option label="PLM">PLN</option>
              <option label="PLM">PLN</option>
            </select>
          </div>
          <div className="w-2/6">
            <h2 className="w-full text-lg font-bold text-left">To</h2>
            <select className="w-full font-bold text-slate-700  ">
              <option label="USD">USD</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end p-3">
          <button className="w-24 h-6 bg-gray-50 text-black rounded-md font-medium border-r-zinc-900">
            Convert
          </button>
        </div>
      </div>
      <div>
        <h1 className=" font-bold text-teal-600 pt-10 pl-100">
          {" "}
          {/* 10 PLN = 44 USD{" "} */}
        </h1>
      </div>
    </div>
  );
};

export default Content;
