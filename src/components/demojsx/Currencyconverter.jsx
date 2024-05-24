// Currencyconverter.jsx

import React, { useState } from "react";
import Currency from "./currencydb/currencydata.json";
import { AiOutlineSwap } from "react-icons/ai";
import { RiRefreshLine } from "react-icons/ri";

const cd = Currency.currencyRates;

const Currencyconverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const convertCurrency = () => {
    const rate = cd[fromCurrency].rates[toCurrency];
    setConvertedAmount(amount * rate);
  };

  const resetCurrency = () => {
    setAmount(0);
    setConvertedAmount(0);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const fromCountry = cd[fromCurrency]?.country;
  const toCountry = cd[toCurrency]?.country;

  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="bg-neutral-800 p-4 rounded-xl flex flex-col gap-4">
        <h1 className="text-center text-white">Currency Converter</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 text-black">
            <div className="bg-neutral-700 p-2 rounded-md flex flex-col gap-2">
              <label className="flex justify-between gap-20">
                <div className="flex flex-col gap-2">
                  <h3 className="text-white">From</h3>
                  <select
                    value={fromCurrency}
                    onChange={handleFromCurrencyChange}
                    className="outline-none rounded-md py-1 px-2 bg-neutral-800 text-white"
                  >
                    {Object.keys(cd).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-full  flex justify-center items-center">
                  <button
                    onClick={swapCurrencies}
                    className="bg-neutral-800  p-2 rounded-md  "
                  >
                    <AiOutlineSwap className=" text-white" />
                  </button>
                </div>

                <div className="flex flex-col gap-2 items-end">
                  <h3 className="text-white">To</h3>
                  <select
                    value={toCurrency}
                    onChange={handleToCurrencyChange}
                    className="outline-none rounded-md py-1 px-2 bg-neutral-800 text-white"
                  >
                    {Object.keys(cd).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            </div>

            <div className="bg-neutral-700 p-2 rounded-md flex flex-col ">
              <label className="flex justify-between gap-2">
                <div className="w-1/2">
                  <label className="flex flex-col gap-2 text-white ">
                    <h3 className="">{fromCountry}</h3>
                    <input
                      type="number"
                      value={amount}
                      onChange={handleAmountChange}
                      className=" py-1 px-2 rounded-md bg-neutral-800 outline-none w-1/2"
                    />
                  </label>
                </div>
                <div className="flex flex-col gap-2 justify-between items-end text-white w-1/2">
                  <h3>{toCountry}</h3>
                  <div>
                    <h2> {convertedAmount}</h2>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="flex gap-2 w-full">
            <button
              className=" bg-neutral-700 rounded-md flex items-center justify-center px-3"
              onClick={resetCurrency}
            >
              <RiRefreshLine fontSize={20} />
            </button>
            <button
              onClick={convertCurrency}
              className="w-full bg-blue-500 p-2 rounded-md"
            >
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currencyconverter;
