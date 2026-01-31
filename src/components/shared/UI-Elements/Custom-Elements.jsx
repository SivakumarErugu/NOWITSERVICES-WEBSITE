

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
        bg-gradient-to-r from-[#0A66C2] to-[#05305C]
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
