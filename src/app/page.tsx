import Image from "next/image";
import boxingImg from "../../public/images/darkboxing.jpg";
import plankImg from "../../public/images/darkplank.jpg";
import laptopImg from "../../public/images/virtualpt.jpg";
import inpersonImg from "../../public/images/personpt.jpg";
import classImg from "../../public/images/class.jpg";

export default function Home() {
  return (
    <main>
      <div className="relative lg:w-[1200px] lg:h-[444px] overflow-hidden m-auto lg:mb-[120px] h-[400px] mb-[75px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={plankImg}
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
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

      <div className="flex flex-col lg:flex-row lg:gap-10 max-w-[1200px] m-auto lg:mb-[120px] mb-[50px]">
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px]">
          <h2 className="mb-4 text-5xl font-Anton text-center">
            ABOUT <span className="text-button-primary">US</span>
          </h2>
          <p>
            Welcome to INSIGHT personal training, where fitness meets
            flexibility. Our expert trainers make fitness convenient for you,
            whether at home, via virtual sessions, or at your favorite gym. Say
            goodbye to missed sessions and rigid schedules—work out anytime,
            anywhere. Ready to achieve your fitness goals on your terms? Let's
            get started today.
          </p>
        </div>
        <div className="lg:w-[750px] lg:h-[350px] overflow-hidden">
          <Image src={boxingImg} alt="weights" />
        </div>
      </div>

      <div className="lg:mb-[120px] max-w-[1200px] m-auto">
        <div className="text-5xl font-Anton text-center lg:mb-[75px] mb-[25px]">
          PERSONAL TRAINING{" "}
          <span className="text-button-primary">SERVICES</span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
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
                <span className="text-button-primary">FITNESS</span> SESSIONS
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
