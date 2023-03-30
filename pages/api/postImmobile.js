import immobileModel from "@/models/immobileModel";
import { connectMongo } from "@/utils/connectMongo";

export default async function newImmobile(req, res) {
  if (req.method === "POST") {
    connectMongo();
    const { immobileObject } = req.body;

    const { projectNumber } = immobileObject;
    const found = await immobileModel.findOne({ projectNumber: projectNumber });
    if (found) {
      return res.json({ message: "this project does already exist" });
    }

    for (const [key, value] of Object.entries(immobileObject)) {
      if (value === null || !value) {
        return res.json({ message: `${key} is missing` });
      }
    }
    await immobileModel.create(immobileObject);
    return res.status(201).json(immobileObject);
  } else {
    return res.json({ message: "method not allowed" });
  }
}
