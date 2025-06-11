import React from 'react'
import ProgressBar from '../siteLinkComponent/ProgressBar'

const IUI_SUCCESS_RATE = [
  {
    name: "Oasis",
    Percentage: 30,
  },
  {
    name: "Worldwide",
    Percentage: 18,
  },
];
const IVF_SUCCESS_RATE_FRESH_CYCLE = [
  {
    name: "Oasis",
    Percentage: 59,
  },
  {
    name: "Worldwide",
    Percentage: 44,
  },
];
const IVF_SUCCESS_RATE_FROZEN_EMBRYO = [
  {
    name: "Oasis",
    Percentage: 69,
  },
  {
    name: "Worldwide",
    Percentage: 52,
  },
];
const IVM_SUCCESS_RATE = [
  {
    name: "Oasis",
    Percentage: 39,
  },
  {
    name: "Worldwide",
    Percentage: 30,
  },
];
const NATURAL_SUCCESS_RATE = [
  {
    name: "Oasis",
    Percentage: 35,
  },
  {
    name: "Worldwide",
    Percentage: 30,
  },
];
const LESS_THAN_30_YEARS = [
  {
    name: "Oasis",
    Percentage: 54,
  },
];
const IVF_30_35_YEARS = [
  {
    name: "Oasis",
    Percentage: 49,
  },
];
const MORE_THAN_35_YEARS = [
  {
    name: "Oasis",
    Percentage: 44,
  },
];

const Graph = () => {
  return (
    <div>
    <div className="container my-20">
        <h3 className="text-center text-2xl font-bold text-black mt-5">
          Quantifying Our Success
        </h3>
        <p className="text-center text-lg text-black mt-3">
          Our success stories are backed by real numbers. And we are super proud
          of our achievements.
        </p>

        <div className="grid gap-10 mt-10 md:grid-cols-2">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-black mb-4">
              IUI SUCCESS RATE
            </h4>
            <div className="flex justify-center">
              <ProgressBar IUI_SUCCESS_RATE={IUI_SUCCESS_RATE} />
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-black mb-4">
              IVF SUCCESS RATE - FRESH CYCLE
            </h4>
            <div className="flex justify-center">
              <ProgressBar IUI_SUCCESS_RATE={IVF_SUCCESS_RATE_FRESH_CYCLE} />
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-900" />

        <div className="grid gap-10 mt-10 md:grid-cols-2">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-black mb-4">
              IVF SUCCESS RATE - FROZEN EMBRYO TRANSFER
            </h4>
            <div className="flex justify-center">
              <ProgressBar IUI_SUCCESS_RATE={IVF_SUCCESS_RATE_FROZEN_EMBRYO} />
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-black mb-4">
              IVM SUCCESS RATE
            </h4>
            <div className="flex justify-center">
              <ProgressBar IUI_SUCCESS_RATE={IVM_SUCCESS_RATE} />
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-900" />

        <div className="grid gap-10 mt-10 md:grid-cols-2">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-black mb-4">
              NATURAL CYCLE IVF SUCCESS RATE
            </h4>
            <div className="flex justify-center">
              <ProgressBar IUI_SUCCESS_RATE={NATURAL_SUCCESS_RATE} />
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-black mb-4">
              LESS THAN 30 YEARS
            </h4>
            <div className="flex justify-center">
              <ProgressBar IUI_SUCCESS_RATE={LESS_THAN_30_YEARS} />
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-900" />

        <div className="grid gap-10 mt-10 md:grid-cols-2">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-black mb-4">
              30-35 YEARS
            </h4>
            <div className="flex justify-center">
              <ProgressBar IUI_SUCCESS_RATE={IVF_30_35_YEARS} />
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-black mb-4">
              MORE THAN 35 YEARS
            </h4>
            <div className="flex justify-center">
              <ProgressBar IUI_SUCCESS_RATE={MORE_THAN_35_YEARS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph