import React from "react";
import { useSelector } from "react-redux";

const AccountSummary = () => {
  const customerFullName = useSelector((store)=>store.customer.fullName)
  const cash = useSelector((store)=>store.account.cash)
  const balance = useSelector((store)=>store.account.balance)

  const holdingsValue = useSelector((store)=>store.account.holdingsValue)

  const leverage= useSelector((store)=>store.account.leverage)
  return (
    <div className="flex justify-center">
    <div className="flex flex-col w-[400px]  mb-6 border-2 rounded-lg px-4 py-2 mt-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Welcome {customerFullName}</h1>
        <div className=" flex flex-col text-xl font-semibold">
        <span>Asset Value</span>
        <span className="bg-gray-500">{balance}</span>
      </div>
      </div>

      <div className="text-xl font-semibold mt-4 mb-4">
        <span>Total Holdings Value:</span>
        <span>{holdingsValue} </span>
      </div>

      <span className="text-xl font-semibold">Cash value:{cash}</span>
      <span className="text-xl font-semibold">Total leverage:{leverage}</span>
    </div>
    </div>
  );
};

export default AccountSummary;
