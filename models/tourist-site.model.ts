import mongoose from "mongoose";

const TouristSiteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
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
      ],
      required: true,
    },
    slug: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

TouristSiteSchema.pre("save", function (next) {
  this.slug = this.name.trim().toLowerCase().split(" ").join("-");
  next();
});

const TouristSite =
  mongoose.models.TouristSite ||
  mongoose.model("TouristSite", TouristSiteSchema);
export default TouristSite;
