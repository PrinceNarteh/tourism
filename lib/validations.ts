import { z } from "zod";

export const validCreateTouristSite = z.object({
  name: z.string({
    required_error: "Tourist site name is required",
  }),
  description: z.string({
    required_error: "Description of the tourist site is required",
  }),
  location: z.string({
    required_error: "Location of the Tourist site is required.",
  }),
  region: z.enum([
    "ahafo",
    "ashanti",
    "bono east",
    "bono ahafo",
    "central",
    "eastern",
    "greater accra",
    "north east",
    "northern",
    "savannah",
    "upper east",
    "upper west",
    "western",
    "western north",
    "volta",
  ]),
});
