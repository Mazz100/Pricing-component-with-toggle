import { useContext } from "react";
import { clsx } from "clsx";
import { planContext } from "../App";

const PricingToggle = (props) => {
  const [plan, setPlan] = useContext(planContext);
  const { yearlyValue, monthlyValue } = props;

  const handleSelectedplan = (e) => {
    const value = e.target.value;
    setPlan(value);
  };

  return (
    <fieldset aria-label="pricing-switcher">
      <legend className="sr-only">Price plan option</legend>
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
            value={yearlyValue}
            onChange={handleSelectedplan}
            checked={plan === yearlyValue}
            aria-checked={plan === yearlyValue}
            className={clsx(
              "peer/yearly absolute z-[1] m-0 inline-block h-full w-full cursor-pointer opacity-0",
              plan === monthlyValue && "z-[2]",
            )}
          />
          <input
            type="radio"
            name="price-plan"
            id="monthly"
            value={monthlyValue}
            onChange={handleSelectedplan}
            checked={plan === monthlyValue}
            aria-checked={plan === monthlyValue}
            className={clsx(
              "peer/monthly absolute z-[1] m-0 inline-block h-full w-full cursor-pointer opacity-0",
              //fliping radio z-index for toggling
              plan === yearlyValue && "z-[2]",
            )}
          />

          <span
            aria-hidden={true}
            className={clsx(
              //Switch background style
              "absolute left-0 right-full top-0 z-0 block h-full w-full rounded-2xl bg-gradient-to-tl from-bottom-right-gradient from-10% to-top-left-gradient to-90% peer-disabled/monthly:from-gray-600 peer-disabled/monthly:to-gray-400",
              //Hover state with pseudo
              "before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:rounded-2xl before:bg-gradient-to-tl before:from-interative-hover-bg before:to-interative-hover-bg before:opacity-0 before:transition-opacity before:duration-150 before:ease-in peer-hover/monthly:from-100% peer-hover/yearly:from-100% before:peer-hover/monthly:opacity-100 before:peer-hover/yearly:opacity-100",
            )}
          ></span>

          <span
            aria-hidden={true}
            className={clsx(
              //Switch-toggle style
              "absolute left-1/2 block h-5 w-5 rounded-full bg-white transition-all duration-[0.2s] ease-out peer-checked/yearly:left-[2px]",
              //Focus state
              "peer-focus-visible/monthly:shadow-[0_0_0_3px_#666] peer-focus-visible/yearly:shadow-[0_0_0_3px_#666]",
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
