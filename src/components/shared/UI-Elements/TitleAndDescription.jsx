const TitleAndDescription = ({
    height = 183,
    width = 1215,
    isSpanFirst = false,
    title = "End-to-End",
    span = "Digital Services",
    description =
    "We provide end-to-end software services that help businesses build, scale, and modernize their digital products. From strategy and design to development and deployment, we deliver reliable, high-quality solutions tailored to your business needs.",
}) => {
    return (
        <div
            style={{
                height: `${height}px`,
                // width: `${width}px`,
            }}
            className="flex flex-col justify-center px-5 md:px-10 "
        >
            {/* Heading */}
            <h1 className="ibmPlex-text text-[25px] font-bold  md:font-Medium text-[#1F2937] md:text-[48px] leading-[31px] tracking-[2.33px] md:leading-tight md:tracking-normal">
                {isSpanFirst ? (
                    <>
                        <span className="text-[#0D5BD7] ibmPlex-text">{span}</span>{" "}
                        {title}
                    </>
                ) : (
                    <>
                        {title}{" "}
                        <span className="text-[#0D5BD7]">{span}</span>
                    </>
                )}
            </h1>
            {/* Description */}
            <p className="inter-text font-normal text-[16px] md:text-[20px] text-[#4B5563] mt-4 ">
                {description}
            </p>
        </div>
    );
};

export default TitleAndDescription;
