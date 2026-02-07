import { ThemeBtnTag } from "../shared/UI-Elements/Custom-Elements";
import AvatarStack from "../shared/UI-Elements/AvatarStack";
const PartnerSection = () => {
  return (
    <section className="
      mt-10
      w-full
      flex
      flex-col
      lg:flex-row
      items-start
      lg:items-center
      gap-6
      lg:gap-16
      px-4
      sm:px-6
      lg:px-20
    ">
      {/* LEFT – Heading */}
      <div className="
        w-full
        lg:w-[700px]
        pt-2
        lg:pt-8
      ">


        <h1
          className="
            ibmPlex-text
            font-medium
            text-[28px]
            sm:text-[36px]
            lg:text-[48px]
            leading-tight
            lg:leading-[74.61px]
            tracking-normal
            lg:tracking-[2.33px]
            text-[#1F2937]
          "
        >
          Your{" "}
          <span className="text-[#0D5BD7]">
            Trusted Partner
          </span>{" "}
          in Digital Transformation
        </h1>
      </div>

      {/* RIGHT – Description + Button */}
      <div className="
        w-full
        lg:w-[460px]
        flex
        flex-col
        gap-5
      ">
        <p className="
          inter-text
          text-[14px]
          sm:text-[16px]
          text-gray-600
        ">
          We are a technology-driven team dedicated to delivering
          scalable, intelligent, and reliable digital solutions for
          modern businesses.
        </p>

        <div className="hidden md:block w-fit">
          <ThemeBtnTag
            BtnText="Know More"
            styles="w-[194px] h-[41px] ibm-text"
          />
        </div>

        {/* MOBILE CONTENT – show only below md */}
        <div className="block md:hidden flex justify-between w-[90%]">
          <p className="ibmPlex-text text-[12px] mb-2">
            Trusted by Global Clients
          </p>
          <AvatarStack />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
