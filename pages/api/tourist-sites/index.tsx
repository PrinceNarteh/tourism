import { NextApiRequest, NextApiResponse } from "next";
import TouristSite from "../../../models/tourist-site.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    res.status(200).json({ message: "Post created" });
  } else if (req.method === "GET") {
    const touristSites = await TouristSite.find({});
    res.status(200).json({ status: "success" });
  }
}
