import { clsx } from "clsx";
import PricingPlan from "./Components/PricingPlan";
import PricingToggle from "./Components/PricingToggle";

function App() {
  return (
    <>
      <div
        className={clsx(
          "flex min-h-screen flex-col items-center justify-center font-montserrat-font",
          //Background images
          "bg-body-bg-color bg-bg-top bg-right-top bg-no-repeat",
        )}
      >
        <main className="flex flex-col items-center">
          <h1 className="p-8 text-3xl font-bold text-text-main-color opacity-70">
            Our Pricing
          </h1>
          <PricingToggle />
          <PricingPlan />
        </main>

        <footer></footer>
      </div>
    </>
  );
}

export default App;
