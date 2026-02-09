import { allCountries } from "country-telephone-data";

export const countryCodes = allCountries.map((c) => ({
  code: c.iso2.toUpperCase(),
  name: c.name,
  dial: `+${c.dialCode}`,
}));
