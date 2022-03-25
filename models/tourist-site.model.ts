import mongoose from "mongoose";

const TouristSiteSchema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

TouristSiteSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    const titleArray = this.title.trim().split(" ");
    this.slug = titleArray.join("-");
  }
  next();
});

export default mongoose.models.TouristSite ||
  mongoose.model("TouristSite", TouristSiteSchema);
