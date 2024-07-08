import { clsx } from "clsx";
import PricingPlan from "./Components/PricingPlan";
import PricingToggle from "./Components/PricingToggle";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div
        className={clsx(
          "flex min-h-screen flex-col items-center justify-center bg-body-bg-color font-montserrat-font",
          //Background images
          "bg-pattern-background bg-pattern-position bg-pattern-size desktop:bg-pattern-position-default tablet:bg-pattern-position-default desktop:bg-[auto,auto] tablet:bg-[auto,auto] bg-no-repeat",
        )}
      >
        <main className="flex flex-1 flex-col items-center justify-center">
          <h1 className="p-8 text-3xl font-bold text-text-main-color opacity-70">
            Our Pricing
          </h1>
          <PricingToggle />
          <PricingPlan />
        </main>

        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
