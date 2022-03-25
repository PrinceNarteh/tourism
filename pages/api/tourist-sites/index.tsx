import dbConnect from "lib/dbConnect";
import TouristSiteModel from "models/tourist-site.model";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const { method } = req;

  if (method === "POST") {
    res.status(200).json({ message: "Post created" });
  }

  if (method === "GET") {
    const touristSites = await TouristSiteModel.find({});
    res.status(200).json({ status: "success", touristSites });
  }
}
