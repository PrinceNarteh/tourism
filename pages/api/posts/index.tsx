import { NextApiRequest, NextApiResponse } from "next";
import TouristSite from "../models/tourist-site.model";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    res.status(200).json({ message: "Post created" });
  } else {
    const touristSites = await TouristSite.find({});
    res.status(200).json({ status: "success", touristSites });
  }
}
