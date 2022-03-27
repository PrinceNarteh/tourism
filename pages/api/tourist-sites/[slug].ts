import TouristSite from "models/tourist-site.model";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { slug },
  } = req;

  if (method === "GET") {
    try {
      const touristSite = await TouristSite.findBySlug(slug);
    } catch (error: any) {
      res.status(400).json({ success: false, error });
    }
  }
}
