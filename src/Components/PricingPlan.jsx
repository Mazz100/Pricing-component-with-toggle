import React from "react";
import { clsx } from "clsx";

const PricingPlan = () => {
  const plans = [
    {
      type: "Basic",
      price: "19.99",
      features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },

    {
      type: "Professional",
      price: "24.99",
      features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },

    {
      type: "Master",
      price: "39.99",
      features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];

  return (
    <div className="flex w-full flex-col items-center gap-6 text-center lg:flex-row lg:gap-0">
      {plans.map((plan, idx) => (
        <div
          className={clsx(
            "bg-white w-full rounded-md p-7 text-text-main-color shadow-md",
            //Professional plan style
            idx === 1 &&
              "text-white bg-gradient-to-tl from-bottom-right-gradient from-10% to-top-left-gradient to-90% lg:py-10",
          )}
          key={idx}
        >
          <h2 className="mb-4 font-bold">{plan.type}</h2>
          <p className="mb-4 inline-flex items-center gap-2 text-7xl font-bold">
            <span className="text-3xl">$</span>
            {plan.price}
          </p>

          <ul className="my-6 flex flex-col gap-2">
            {plan.features.map((feature, index) => (
              <li
                className="border-t-[1px] border-border-color p-3 text-sm font-semibold last-of-type:border-b-[1px]"
                key={index}
              >
                {feature}
              </li>
            ))}
          </ul>

          <a
            className={clsx(
              "block rounded-md bg-gradient-to-tl from-bottom-right-gradient from-10% to-top-left-gradient to-90% p-3 text-xs font-semibold uppercase tracking-widest text-[#fff]",
              //Interactive states
              "hover:ring-border-hover-color hover:to-white hover:from-white transition-colors duration-150 ease-in hover:text-[#696fdd] hover:ring-[1px] focus-visible:outline-offset-4 focus-visible:outline-[#696fdd]",
              //professional plan link
              idx === 1 &&
                "bg-white bg-none text-link-text-color hover:bg-[transparent] hover:text-[#fff] hover:ring-[1px] hover:ring-[#ffffff] focus-visible:outline-[#fff]",
            )}
            href="#"
          >
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default PricingPlan;
