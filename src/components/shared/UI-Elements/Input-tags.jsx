"use client"

import Select from "react-select";

/* ---------- STYLES (unchanged) ---------- */
const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "100%",
    height: "fit-content",
  }),
  control: (provided) => ({
    ...provided,
    minHeight: "2.8rem",
    borderRadius: "0.5rem",
    borderColor: "#d1d5db",
    boxShadow: "none",
    overflow: "hidden",
    "&:hover": { borderColor: "#d1d5db" },
  }),
  valueContainer: (provided) => ({
    ...provided,
    display: "flex",
    flexWrap: "nowrap",
    maxWidth: "100%",
    paddingRight: "0.5rem",
    overflowX: "hidden",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 80,
    borderRadius: "0.5rem",
    padding: "4px",
    overflowY: "hidden",
    backgroundColor: "#fff",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "12rem",
    overflowY: "auto",
    scrollbarWidth: "thin",

  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#ddd"
      : state.isFocused
      ? "#eee"
      : "#fff",
    padding: "0.5rem 0.75rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
  }),
};

export default function FormikReactSelect({
  field,
  form,
  label,
  options,
  loading = false,
  readonly = false,
}) {
  const error =
    form.touched[field.name] && form.errors[field.name];

  const selectedOption =
    options.find((o) => o.value === field.value) || null;

  return (
    <div className={`w-full ${label ? "min-h-[5.75rem]" : ""}`}>
      {label && (
        <label className="block text-sm font-medium pl-2 mb-[3px]">
          {label}
        </label>
      )}

      <Select
        instanceId={field.name}
        value={selectedOption}
        options={options}
        isDisabled={readonly}
        isLoading={loading}
        styles={customStyles}
        onChange={(option) =>
          form.setFieldValue(field.name, option?.value || "")
        }
        onBlur={() =>
          form.setFieldTouched(field.name, true)
        }
        formatOptionLabel={(e) => (
          <div title={e.label} className="truncate">
            {e.label}
          </div>
        )}
      />

      {error && (
        <p className="text-red-500 text-xs ml-1 mt-[2px]">
          {error}
        </p>
      )}
    </div>
  );
}
