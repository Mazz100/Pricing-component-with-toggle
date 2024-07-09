import React, { useState } from "react";
import { clsx } from "clsx";

const PricingPlan = ({ isYearly }) => {
  const pricePlan = [
    {
      type: "Basic",
      month: "19.99",
      year: "199.99",
      features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },

    {
      type: "Professional",
      month: "24.99",
      year: "244.99",
      features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },

    {
      type: "Master",
      month: "39.99",
      year: "399.99",
      features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];

  return (
    <div className="flex w-full flex-col items-center gap-6 text-center desktop:flex-row desktop:gap-0">
      {pricePlan.map((plan, idx) => (
        <div
          className={clsx(
            "w-full rounded-md bg-white p-7 text-text-main-color shadow-[0_6px_10px_3px_hsla(0,0%,70%,0.4)]",
            //Professional plan style
            idx === 1 &&
              "bg-gradient-to-tl from-bottom-right-gradient from-10% to-top-left-gradient to-90% text-white lg:py-10",
          )}
          key={idx}
        >
          <h2 className="mb-4 font-bold">{plan.type}</h2>
          <p className="mb-4 inline-flex items-center gap-2 text-7xl font-bold">
            <span className="text-3xl">$</span>
            {isYearly ? plan.year : plan.month}
          </p>

          <ul className="my-6 flex flex-col gap-2">
            {plan.features.map((feature, index) => (
              <li
                className={clsx(
                  "border-t-[1px] border-border-color p-3 text-sm font-semibold last-of-type:border-b-[1px]",
                  idx === 1 && "border-professional-border",
                )}
                key={index}
              >
                {feature}
              </li>
            ))}
          </ul>

          <a
            className={clsx(
              "relative z-[1] block rounded-md bg-gradient-to-tl from-bottom-right-gradient from-10% to-top-left-gradient to-90% p-3 text-xs font-semibold uppercase tracking-widest text-[#fff]",
              //gradient pseudo on hover state
              "before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-[1] before:rounded-md before:bg-gradient-to-tl before:from-white before:to-white before:opacity-0 before:transition-opacity before:duration-150 before:ease-in hover:before:opacity-100",
              //Interactive states
              "transition-colors duration-150 ease-in hover:text-[#696fdd] hover:ring-[1px] hover:ring-[#696fdd] focus-visible:outline-offset-4 focus-visible:outline-[#696fdd]",
              //professional plan link
              idx === 1 &&
                "bg-white bg-none text-link-text-color before:content-none hover:bg-[transparent] hover:text-[#fff] hover:ring-[1px] hover:ring-[#fff] focus-visible:outline-[#fff]",
            )}
            href="#"
            aria-labelledby="plan type"
          >
            <span className="sr-only" id="plan type">
              {plan.type}
            </span>
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default PricingPlan;
