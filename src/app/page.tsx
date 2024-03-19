import Image from "next/image";
import boxingImg from "../../public/images/darkboxing.jpg";
import plankImg from "../../public/images/darkplank.jpg";
import laptopImg from "../../public/images/virtualpt.jpg";
import inpersonImg from "../../public/images/personpt.jpg";
import classImg from "../../public/images/class.jpg";

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden lg:h-[444px] lg:w-[1200px] m-auto mb-[120px]">
        <Image src={plankImg} alt="weights" />
      </div>
      <div
        className="absolute bottom-50 left-0 right-0 top-0 h-[444px] max-w-[1200px] overflow-hidden bg-fixed m-auto lg:mt-[132px]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
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

      <div className="flex flex-col lg:flex-row lg:gap-10 max-w-[1200px] m-auto lg:mb-[120px]">
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
        <div className="lg:w-[750px] overflow-hidden">
          <Image src={boxingImg} alt="weights" />
        </div>
      </div>

      <div className="lg:mb-[120px] max-w-[1200px] m-auto">
        <div className="text-5xl font-Anton text-center lg:mb-[75px]">
          PERSONAL TRAINING{" "}
          <span className="text-button-primary">SERVICES</span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="relative bg-gray-900 overflow-hidden lg:h-[400px] lg:w-[375px]">
            <Image
              src={inpersonImg}
              alt="weights"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 container mx-auto px-4 py-24 text-white text-center">
              <h1 className="font-Anton text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-button-primary">IN</span>-PERSON TRAINING
              </h1>
              <p className="font-bold text-lg sm:text-xl md:text-2xl">
                FITNESS AND HEALTH DELIVERED
              </p>
            </div>
          </div>
          <div className="relative bg-gray-900 overflow-hidden lg:h-[400px] lg:w-[375px]">
            <Image
              src={laptopImg}
              alt="weights"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 container mx-auto px-4 py-24 text-white text-center">
              <h1 className="font-Anton text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-button-primary">ON</span>LINE TRAINING
              </h1>
              <p className="font-bold text-lg sm:text-xl md:text-2xl">
                FOR YOUR BUSY LIFESTYLE
              </p>
            </div>
          </div>
          <div className="relative bg-gray-900 overflow-hidden lg:h-[400px] lg:w-[375px]">
            <Image
              src={classImg}
              alt="weights"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 container mx-auto px-4 py-24 text-white text-center">
              <h1 className="font-Anton text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-button-primary">FITNESS</span>{" "}SESSIONS
              </h1>
              <p className="font-bold text-lg sm:text-xl md:text-2xl">
                INCLUDE FAMILY AND FRIENDS
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
