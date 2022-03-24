import { Schema, model } from "mongoose";

const touristSiteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    body: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      enum: [
        "Ahafo",
        "Ashanti",
        "Bono East",
        "Bono Ahafo",
        "Central",
        "Eastern",
        "Greater Accra",
        "North East",
        "Northern",
        "Savannah",
        "Upper East",
        "Upper West",
        "Western",
        "Western North",
        "Volta",
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

touristSiteSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    const titleArray = this.title.trim().split(" ");
    this.slug = titleArray.join("-");
  }
  next();
});

const TouristSite = model("TouristSite", touristSiteSchema);
export default TouristSite;
