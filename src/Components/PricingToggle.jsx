import React from "react";
import { clsx } from "clsx";

const PricingToggle = () => {
  return (
    <fieldset aria-label="pricing-switcher">
      <div className="my-10 flex items-center">
        <label
          htmlFor="yearly"
          className="cursor-pointer text-sm font-semibold text-secondary-color"
        >
          Annually
        </label>
        {/*Toggle wrapper*/}
        <span className="relative mx-4 inline-flex h-[1.5rem] w-[2.75rem] items-center">
          <input
            type="radio"
            name="price-plan"
            id="yearly"
            className="peer/yearly relative z-[1] m-0 inline-block h-full w-1/2 cursor-pointer opacity-0"
          />
          <input
            type="radio"
            name="price-plan"
            id="monthly"
            defaultChecked
            className="peer/monthly relative z-[1] m-0 inline-block h-full w-1/2 cursor-pointer opacity-0"
          />

          <span
            aria-hidden={true}
            className={clsx(
              //Switch background style
              "absolute left-0 right-full top-0 z-0 block h-full w-full rounded-2xl bg-gradient-to-tl from-bottom-right-gradient from-10% to-top-left-gradient to-90%",
              //Hover state
              "peer-hover/yearly:from-interative-hover-bg peer-hover/monthly:from-interative-hover-bg peer-hover/monthly:from-100% peer-hover/yearly:from-100%",
            )}
          ></span>

          <span
            aria-hidden={true}
            className={clsx(
              //Switch-toggle style
              "absolute left-1/2 z-[2] block h-5 w-5 rounded-full bg-white transition-all duration-[0.2s] ease-out peer-checked/yearly:left-[2px]",
              //Focus state
              "peer-focus/yearly:border-border-focus peer-focus/monthly:border-border-focus peer-focus/monthly:border-[1px] peer-focus/yearly:border-[1px]",
            )}
          ></span>
        </span>
        <label
          htmlFor="monthly"
          className="cursor-pointer text-sm font-semibold text-secondary-color"
        >
          Monthly
        </label>
      </div>
    </fieldset>
  );
};

export default PricingToggle;
