import dbConnect from "lib/dbConnect";
import { validCreateTouristSite } from "lib/validations";
import TouristSite from "models/tourist-site.model";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const { method, body } = req;

  if (method === "POST") {
    try {
      const result = validCreateTouristSite.safeParse(body);
      if (!result.success) {
        const errors = result.error.errors.map((err: any) => err.message);
        return res.status(400).json({ success: false, errors });
      }
      const touristSite = await TouristSite.create(result.data);
      res.status(201).json({ status: true, touristSite });
    } catch (error) {
      res.status(400).json({ status: false, error });
    }
  }

  if (method === "GET") {
    try {
      const touristSites = await TouristSite.find({});
      res.status(200).json({ status: true, touristSites });
    } catch (error) {
      res.status(400).json({ status: false, error });
    }
  }
}
