import Image from "next/image";
import stretchImg from "../../../public/images/stretch.jpg";

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

    </main>
  );
}
