import dbConnect from "lib/dbConnect";
import { validCreateTouristSite } from "lib/validations";
import TouristSiteModel from "models/tourist-site.model";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const { method, body } = req;

  if (method === "POST") {
    const validationError = validCreateTouristSite.safeParse(body);
    if (!validationError.success) {
      const errors = validationError.error.errors.map(
        (err: any) => err.message
      );
      return res.status(400).json({ success: false, errors });
    }
    res.status(200).json({ message: "Post created" });
  }

  if (method === "GET") {
    const touristSites = await TouristSiteModel.find({});
    res.status(200).json({ status: "success", touristSites });
  }
}
