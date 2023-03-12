import immoModel from "@/models/immoModel";
import { connectMongo } from "@/utils/connectMongo";
export default async function handler(req, res) {
  connectMongo();
  const data = await immoModel.find({});
  console.log(data);

  res.status(200).json(data);
}
