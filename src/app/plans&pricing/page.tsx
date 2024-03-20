import Image from "next/image";
import weightImg from "../../../public/images/weights.jpg";
import helpImg from "../../../public/images/help.jpg";
import laptopImg from "../../../public/images/virtualtrain.jpg";
import groupImg from "../../../public/images/groupsession.jpg";

export default function Plans() {
  return (
    <main>
      <div className="relative lg:w-[1200px] lg:h-[444px] overflow-hidden m-auto lg:mb-[120px] h-[400px] mb-[50px]">
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
            PLANS <span className="text-button-primary">AND</span> RICING
          </h2>
          <button
            type="button"
            className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            FREE EVALUATION
          </button>
        </div>
      </div>

      <div className="flex flex-col max-w-[1200px] m-auto lg:mb-[120px] mb-[50px] px-[20px]">
        <h2 className="mb-4 text-5xl font-Anton text-center">
          <span className="text-button-primary">360&#176;</span> GUIDANCE
        </h2>
        <p className="text-center">
          At our personal training studio, we believe in a holistic approach to
          fitness and well-being. That's why all of our one-on-one personal
          training plans are designed to address not only physical fitness but
          also nutritional and therapeutic needs. Our expert trainers work
          closely with each client to develop customized plans that encompass
          comprehensive dietary guidance and therapeutic techniques aimed at
          enhancing overall health and vitality. With our integrated approach,
          you'll not only achieve your fitness goals but also gain valuable
          knowledge and tools to support your long-term well-being.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:gap-10 max-w-[1200px] m-auto lg:mb-[120px] mb-[50px]">
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px]">
          <h2 className="mb-4 text-5xl font-Anton text-center">
            <span className="text-button-primary">IN</span>-PERSON
          </h2>
          <p className="text-center lg:text-left">
            Choose to meet our expert trainers at the comfort of your home, a
            nearby gym, or a picturesque park. Wherever you feel most motivated,
            we'll bring our expertise to you, ensuring your fitness journey is
            both effective and enjoyable. Take control of your workouts and
            discover the freedom to train on your terms.
          </p>
        </div>
        <div className="lg:w-[750px] lg:h-[350px] overflow-hidden mb-[20px]">
          <Image src={helpImg} alt="weights" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:gap-10 max-w-[1200px] m-auto lg:mb-[120px] mb-[50px]">
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px]">
          <h2 className="mb-4 text-5xl font-Anton text-center">
            <span className="text-button-primary">ON</span>LINE
          </h2>
          <p className="text-center lg:text-left">
            Transform your fitness routine with our online video call sessions.
            Our expert trainers provide personalized workouts and real-time
            feedback, ensuring you stay motivated from anywhere. Elevate your
            workouts and achieve your fitness goals with our convenient virtual
            training option.
          </p>
        </div>
        <div className="lg:w-[750px] lg:h-[350px] overflow-hidden mb-[20px]">
          <Image src={laptopImg} alt="weights" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:gap-10 max-w-[1200px] m-auto lg:mb-[120px] mb-[50px]">
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px]">
          <h2 className="mb-4 text-5xl font-Anton text-center">
            <span className="text-button-primary">FITNESS</span> SESSIONS
          </h2>
          <p className="text-center lg:text-left">
            Bring the energy of a fitness class directly to your community with
            our exclusive hosting option. Whether it's kickboxing, yoga, or
            cardio, gather your family, friends, and neighbors for a fun and
            invigorating workout experience led by our expert instructors. With
            customizable class options tailored to your preferences, you can
            enjoy the benefits of group fitness in the comfort of your own
            space. Get ready to inspire and motivate your circle to reach their
            health and wellness goals together.
          </p>
        </div>
        <div className="lg:w-[750px] lg:h-[350px] overflow-hidden mb-[20px]">
          <Image src={groupImg} alt="weights" />
        </div>
      </div>
    </main>
  );
}
