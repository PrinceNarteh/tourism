import { Schema, model, models, Document, Model, Models } from "mongoose";

export interface ITouristSite {
  name: string;
  description: string;
  location: string;
  region:
    | "ahafo"
    | "ashanti"
    | "bono east"
    | "bono ahafo"
    | "central"
    | "eastern"
    | "greater accra"
    | "north east"
    | "northern"
    | "savannah"
    | "upper east"
    | "upper west"
    | "western"
    | "western north"
    | "volta";
  slug?: string;
}

interface ITouristSiteDocument extends ITouristSite, Document {}
interface ITouristSiteModel extends Model<ITouristSiteDocument> {
  searchBySlug: (slug: string) => Promise<ITouristSite>;
}

const touristSiteSchema = new Schema<ITouristSiteDocument, ITouristSiteModel>(
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

touristSiteSchema.pre("save", function (next) {
  this.slug = this.name.trim().toLowerCase().split(" ").join("-");
  next();
});

touristSiteSchema.statics.searchBySlug = async function (slug: string) {
  return this.findOne({ slug });
};

interface mongooseModels extends Models {
  TouristSite: Model<ITouristSiteDocument, ITouristSiteModel>;
}

export default mongooseModels.TouristSite ||
  model<ITouristSiteDocument, ITouristSiteModel>(
    "TouristSite",
    touristSiteSchema
  );
