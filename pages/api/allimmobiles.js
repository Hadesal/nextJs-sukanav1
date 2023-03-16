import immoModel from "@/models/immoModel";
import { connectMongo } from "@/utils/connectMongo";
export default async function handler(req, res) {
  if (req.method === "GET") {
    connectMongo();
    const data = await immoModel.find({});
    res.status(200).json(data);
    return;
  } else {
    res.json({
      message: "method is not allowed please make sure to make a get request",
    });
    return;
  }
}
