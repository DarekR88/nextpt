import Image from "next/image";
import weightImg from "../../../public/images/weights.jpg"

export default function Plans() {
  return (
    <main>
            <div className="relative lg:w-[1200px] lg:h-[444px] overflow-hidden m-auto lg:mb-[120px] h-[400px] mb-[75px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={weightImg}
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h2 className="mb-4 text-5xl font-Anton">
            PLANS{" "}
            <span className="text-button-primary">AND</span>
            {" "}RICING
          </h2>
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
    </main>
  );
}
