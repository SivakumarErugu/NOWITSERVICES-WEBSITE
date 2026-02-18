import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import SlidingHeader from "./SlidingHeader";

export const ThemeBtnTag = ({
  BtnText,
  children,
  type = "button",
  styles = "",
  loading = false,
  disabled = false,
  onClick
}) => (
  <button
    suppressHydrationWarning
    disabled={loading || disabled}
    type={type}
    onClick={onClick}
    className={`
      relative overflow-hidden
      h-9 min-w-20 px-6 rounded-xl border font-semibold
      inline-flex justify-center items-center
      bg-[#55B233] text-white
      group
      ${loading || disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      ${styles}
    `}
  >
    {/* Gradient curtain */}
    <span
      className="
        absolute inset-0
        bg-linear-to-r from-[#0A66C2] to-[#05305C]
        transform scale-x-0 origin-left
        transition-transform duration-1000 ease-in-out
        group-hover:scale-x-100
      "
    />

    {/* Content */}
    <span className="relative z-10 flex items-center">
      {loading ? (
        <div className="animate-spin w-5 h-5 border-2 border-t-white border-white/40 rounded-full"></div>
      ) : (
        <>
          {children && <span className="mr-1">{children}</span>}
          <span>{BtnText}</span>
        </>
      )}
    </span>
  </button>
);

export const ThemeBtnTag2 = ({
  BtnText,
  children,
  type = "button",
  styles = "",
  loading = false,
  disabled = false,
  onClick
}) => (
  <button
    disabled={loading || disabled}
    type={type}
    onClick={onClick}
    className={`
      relative overflow-hidden
      h-9 min-w-20 px-6 rounded-lg border font-semibold
      inline-flex justify-center items-center
      bg-[#55B233] text-white
      group
      ${loading || disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      ${styles}
    `}
  >
    {/* Gradient curtain */}
    <span
      className="
        absolute inset-0
        bg-[#0D5293]
        transform scale-x-0 origin-left
        transition-transform duration-1000 ease-in-out
        group-hover:scale-x-100
      "
    />

    {/* Content */}
    <span className="relative z-10 flex items-center">
      {loading ? (
        <div className="animate-spin w-5 h-5 border-2 border-t-white border-white/40 rounded-full"></div>
      ) : (
        <>
          {children && <span className="mr-1">{children}</span>}
          <span>{BtnText}</span>
        </>
      )}
    </span>
  </button>
);

export const ThemeLinkTag = ({
  BtnText,
  children,
  href = "/",
  styles = "",
  loading = false,
  disabled = false,
}) => {
  const isDisabled = loading || disabled;

  // Check if the link is a same-page anchor
  const isAnchor = href.startsWith("#");

  const commonClasses = `
    relative overflow-hidden
    h-9 min-w-20 px-6 rounded-xl border font-semibold
    inline-flex justify-center items-center
    bg-[#55B233] text-white
    group
    ${isDisabled ? "opacity-50 pointer-events-none cursor-not-allowed" : "cursor-pointer"}
    ${styles}
  `;

  // Internal content shared by both Link and <a>
  const content = (
    <>
      {/* Gradient curtain */}
      <span
        className="
          absolute inset-0
          bg-linear-to-r from-[#0A66C2] to-[#05305C]
          transform scale-x-0 origin-left
          transition-transform duration-1000 ease-in-out
          group-hover:scale-x-100
        "
      />

      {/* Content */}
      <span className="relative z-10 flex items-center">
        {loading ? (
          <div className="animate-spin w-5 h-5 border-2 border-t-white border-white/40 rounded-full"></div>
        ) : (
          <>
            {children && <span className="mr-1">{children}</span>}
            <span>{BtnText}</span>
          </>
        )}
      </span>
    </>
  );

  // If it's an anchor link (#id), use a standard <a> tag
  if (isAnchor) {
    return (
      <a href={isDisabled ? "#" : href} className={commonClasses}>
        {content}
      </a>
    );
  }

  // Otherwise, use Next.js Link for route transitions
  return (
    <Link href={isDisabled ? "#" : href} className={commonClasses}>
      {content}
    </Link>
  );
};


export const ThemeBottomBorder = ({ width = "70%", bottom = "1px", left = "0px" }) => {
  return (
    <span
      className="absolute h-0.5"
      style={{
        width: width,
        left: left,
        bottom: `-${bottom}`,
        background:
          "linear-gradient(90deg, rgba(10,102,194,0) 0%, #0A66C2 70%, #0A66C2 100%)",
        borderTopRightRadius: "999px",
        borderBottomRightRadius: "999px",
      }}
    />
  );
};


export const ThemeBottomBorder2 = ({ width = "70%", bottom = "1px", left = "0px" }) => {
  return (
    <span
      className="absolute h-0.5"
      style={{
        width: width,
        left: left,
        bottom: `-${bottom}`,
        background: "linear-gradient(90deg, rgba(85,178,51,0) 0%, #55B233 40%, #4BF20D 68.24%)",
        borderTopRightRadius: "999px",
        borderBottomRightRadius: "999px",
      }}
    />
  );
};


export const ThemeHeaderSideLine = ({ width = "60px", bottom = "0px", left = "0px" }) => {
  return (
    <span
      className="h-1 inline-block relative top-1 w-8 lg:w-12"
      style={{
        left: left,
        bottom: bottom,
        // 180deg makes the gradient go from the top edge to the bottom edge
        background: "linear-gradient(180deg, #87CE6D 0%, #174F88 100%)",
        borderTopLeftRadius: "999px",
        borderBottomLeftRadius: "999px",
      }}
    />
  );
};

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
  styles = ""
}) => {
  return (
    <div className="relative w-fit">
      {/* Search Icon */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <CiSearch size={25} />
      </span>

      {/* Input */}
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-80 h-10 pl-10 pr-4 rounded-lg
          border-2 border-gray-300
          text-[#252525] placeholder:text-gray-400
          focus:outline-none focus:ring-1 focus:ring-blue-200
          transition-all duration-200
          ${styles}
        `}
      />
    </div>
  );
};

export const CustomHeading = ({
  title = "",
  span = "",
  description = "",
  isSpanFirst = false,
}) => {
  return (
    <div className="h-[111px] md:self-center px-5 md:px-10 flex flex-col gap-2 w-full ">

      <div className="flex md:justify-center md:items-center text-center gap-2">
        <h1 className="text-[25px] md:text-[48px] ibmPlex-text font-bold md:font-medium">

          {isSpanFirst ? (
            <>
              <span className="text-[#0A66C2]">{span}</span> {title}
            </>
          ) : (
            <>
              {title} <span className="text-[#0A66C2]">{span}</span>
            </>
          )}

        </h1>

        <SlidingHeader />
      </div>

      <p className="ibm-text text-[15px] md:text-[20px] text-[#252525] md:text-center">
        {description}
      </p>
    </div>
  );
};



export const ReadBlogBtn = ({ href }) => {
  return (
    <Link
      href={href}
      className="
        relative overflow-hidden
        h-10 min-w-20 px-6 rounded-lg border border-gray-400 
        inline-flex justify-center items-center
        bg-white text-[#252525DE]
        group
      "
    >
      {/* Gradient curtain */}
      <span
        className="
          absolute inset-0
          bg-[#55B233]
          transform scale-x-0 origin-left
          transition-transform duration-1000 ease-in-out
          group-hover:scale-x-100
        "
      />

      {/* Content */}
      <span className="relative z-10 text-md inline-flex items-center gap-1 hover:scale-102">
        Read More <GoArrowUpRight />
      </span>
    </Link>
  );
};

export const NextBtn = ({ label, onClickBtn = {} }) => {
  return (
    <button
      type="button"
      onClick={onClickBtn}
      className="
        relative overflow-hidden
        h-10 min-w-20 px-6 rounded-lg border border-gray-400 
        inline-flex justify-center items-center
        bg-white text-[#252525DE]
        group
      "
    >
      {/* Gradient curtain */}
      <span
        className="
          absolute inset-0
          bg-[#55B233]
          transform scale-x-0 origin-left
          transition-transform duration-1000 ease-in-out
          group-hover:scale-x-100
        "
      />

      {/* Content */}
      <span className="relative z-10 text-md inline-flex items-center gap-1 hover:scale-102">
        {label} <GoArrowUpRight />
      </span>
    </button>
  );
};