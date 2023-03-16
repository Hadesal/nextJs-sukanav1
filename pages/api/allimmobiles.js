import immobileModel from "@/models/immobileModel";
import { connectMongo } from "@/utils/connectMongo";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const { sort } = req.body;

    connectMongo();
    const data = await immobileModel
      .find({})
      .sort({ projectNumber: sort ? sort : "asc" });
    res.status(200).json(data);
    return;
  } else {
    res.json({
      message: "method is not allowed please make sure to make a get request",
    });
    return;
  }
}
