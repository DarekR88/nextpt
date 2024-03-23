import Image from "next/image";
import stretchImg from "../../../public/images/stretch.jpg";
import gybImg from "../../../public/images/gyb.jpg";

export default function About() {
  return (
    <main>
      <div className="relative lg:w-[1200px] lg:h-[444px] overflow-hidden m-auto lg:mb-[80px] h-[400px] mb-[50px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={stretchImg}
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h2 className="mb-4 text-8xl font-Anton">
            <span className="text-button-primary">A</span>BOUT
          </h2>
        </div>
      </div>

      <div className="flex flex-col max-w-[1200px] m-auto lg:mb-[120px] mb-[50px] px-[20px]">
        <h2 className="mb-4 text-5xl font-Anton text-center">
          <span className="text-button-primary">360&#176;</span> GUIDANCE
        </h2>
        <p className="text-center">
          At Insight personal training, we believe in a holistic approach to
          fitness and well-being. That&#39;s why all of our one-on-one personal
          training plans are designed to address not only physical fitness but
          also nutritional and therapeutic needs. Our expert trainers work
          closely with each client to develop customized plans that encompass
          comprehensive dietary guidance and therapeutic techniques aimed at
          enhancing overall health and vitality. With our integrated approach,
          you&#39;ll not only achieve your fitness goals but also gain valuable
          knowledge and tools to support your long-term well-being.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:gap-10 max-w-[1200px] m-auto lg:mb-[120px] mb-[50px]">
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px]">
          <h2 className="mb-4 text-5xl font-Anton text-center">
            <span className="text-button-primary">S</span>UPPORT
          </h2>
          <p className="text-center lg:text-left">
            We understand that changing your life can be difficult. That&#39;s why
            when you sign up with a personal trainer from Insight Personal
            Training, you&#39;re not just getting a workout plan, you&#39;re gaining a
            dedicated partner that has your back every step of the way. With
            Insight Personal Training, you&#39;re never alone in your pursuit of a
            healthier, stronger you.
          </p>
        </div>
        <div className="lg:w-[750px] lg:h-[350px] overflow-hidden mb-[20px]">
          <Image src={gybImg} alt="weights" />
        </div>
      </div>
    </main>
  );
}
