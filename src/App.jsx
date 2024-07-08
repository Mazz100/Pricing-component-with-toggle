import { clsx } from "clsx";
import PricingPlan from "./Components/PricingPlan";
import PricingToggle from "./Components/PricingToggle";
import Footer from "./Components/Footer";
import { createContext, useEffect, useState } from "react";
export const planContext = createContext("");

function App() {
  const yearlyValue = "yearly plan";
  const monthlyValue = "monthly plan";

  const [plan, setPlan] = useState(monthlyValue);
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const yearlySelected = plan === yearlyValue;
    setIsYearly(yearlySelected);
    console.log(isYearly);
  }, [plan]);

  return (
    <>
      <div
        className={clsx(
          "flex min-h-screen flex-col items-center justify-center bg-body-bg-color font-montserrat-font",
          //Background images
          "bg-pattern-background bg-pattern-size bg-pattern-position bg-no-repeat tablet:bg-[auto,auto] tablet:bg-pattern-position-default desktop:bg-[auto,auto] desktop:bg-pattern-position-default",
        )}
      >
        <main className="flex flex-1 flex-col items-center justify-center">
          <h1 className="p-8 text-3xl font-bold text-text-main-color opacity-70">
            Our Pricing
          </h1>
          <planContext.Provider value={[plan, setPlan]}>
            <PricingToggle
              yearlyValue={yearlyValue}
              monthlyValue={monthlyValue}
            />
            <PricingPlan isYearly={isYearly} />
          </planContext.Provider>
        </main>

        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
