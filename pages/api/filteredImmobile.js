import immobileModel from "@/models/immobileModel";
import { connectMongo } from "@/utils/connectMongo";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const { filterKey, filterValue } = req.body;

    connectMongo();
    const data = await immobileModel
      .find({ [filterKey]: filterValue })
      .sort({ projectNumber: "asc" });
    res.status(200).json(data);
    return;
  } else {
    res.json({
      message: "method is not allowed please make sure to make a get request",
    });
    return;
  }
}
