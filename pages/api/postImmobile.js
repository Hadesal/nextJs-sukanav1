import immobileModel from "@/models/immobileModel";
import { connectMongo } from "@/utils/connectMongo";

export default async function newImmobile(req, res) {
  if (req.method === "POST") {
    connectMongo();
    const { immobileObject } = req.body;

    const { projectNumber } = immobileObject;
    const found = await immobileModel.findOne({ projectNumber: projectNumber });
    if (found) {
      res.json({ message: "this project does already exist" });
      return;
    }

    for (const [key, value] of Object.entries(immobileObject)) {
      if (value === null || !value) {
        res.json({ message: `${key} is missing` });
        return;
      }
    }
    await immobileModel.create(immobileObject);
    res.status(201).json(immobileObject);
    return;
  } else {
    res.json({ message: "method not allowed" });
    return;
  }
}
