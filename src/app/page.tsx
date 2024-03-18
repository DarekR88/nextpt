import Image from "next/image";
import laptoplsImg from "../../public/images/laptoplandscape.jpg";
import plankImg from "../../public/images/darkplank.jpg";

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden lg:h-[444px] lg:w-[1200px] m-auto mb-[150px]">
        <Image src={plankImg} alt="weights" />
      </div>
      <div
        className="absolute bottom-50 left-0 right-0 top-0 h-[444px] max-w-[1200px] overflow-hidden bg-fixed m-auto lg:mt-[132px]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="flex h-[444px] items-center justify-left pl-[100px]">
          <div className="text-white">
            <h2 className="mb-4 text-5xl font-Anton">
              REACH YOUR FITNESS{" "}
              <span className="text-button-primary">GOALS</span>
            </h2>
            <h4 className="mb-6 text-xl font-semibold">
              <span className="text-button-primary">ANY</span>TIME{" "}
              <span className="text-button-primary">ANY</span>WHERE
            </h4>
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              SIGN UP TODAY
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-10 max-w-[1200px] m-auto">
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px]">
          <h2 className="mb-4 text-5xl font-Anton">
            ABOUT <span className="text-button-primary">US</span>
          </h2>
          <p>
            Welcome to INSIGHT personal training, where fitness meets
            flexibility. Our team of expert personal trainers is dedicated to
            making fitness accessible and convenient for you. Whether you prefer
            sweating it out in the comfort of your own home, staying on track
            with virtual sessions via video chat, or meeting at your favorite
            gym, we've got you covered. Say goodbye to missing sessionSs and
            rigid schedules, with us, you can work out anytime, anywhere. Ready
            to achieve your fitness goals on your terms? Let's get started
            today.
          </p>
        </div>
        <div className="max-w-[750px]">
          <Image src={laptoplsImg} alt="weights" />
        </div>
      </div>
    </main>
  );
}
