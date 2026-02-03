import { ThemeBtnTag } from "../shared/UI-Elements/Custom-Elements";


const PartnerSection = () => {
  return (
    <div className="mt-10 flex w-[100%] items-center gap-15 px-20">
      {/* Heading container */}
      <div className="w-[700px] h-[150px] pt-8">
        <h1
          className="
            ibm-text
            font-bold
            text-[48px]
            leading-[74.61px]
            tracking-[2.33px]
            text-[#1F2937]
          "
        >
          Your{" "}
          <span className="text-[#0D5BD7]">
            Trusted Partner 
          </span>{" "} in
           Digital Transformation
        </h1>
        </div>

        <div className="w-[460px] min-h-[161px] flex flex-col  p-5 gap-7">
          <p className="inter-text">We are a technology-driven team  dedicated to delivering 
            scalable , intelligent, and reliable digital solutions for modern businesses.</p>
          <ThemeBtnTag BtnText="Know More" styles="w-[194px] h-[41px] ibm-text" />
        </div>

      

    </div>
  );
};

export default PartnerSection;
