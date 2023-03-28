import immobileModel from "@/models/immobileModel";
import { connectMongo } from "@/utils/connectMongo";

export default async function newImmobile(req, res) {
  if (req.method === "POST") {
    connectMongo();
    const { immobileObject } = req.body;
    const {
      projectNumber,
      immoType,
      details,
      completionOfBuild,
      livingSpace,
      price,
      location,
      city,
      address,
      rooms,
      images,
      zib,
    } = immobileObject;
    const found = await immobileModel.findOne({ projectNumber: projectNumber });
    if (found) {
      res.json({ message: "this project does already exist" });
      return;
    }

    const immobile = {
      projectNumber,
      immoType,
      details,
      completionOfBuild,
      livingSpace,
      price,
      location,
      city,
      address,
      rooms,
      images,
      zib,
    };
    for (const [key, value] of Object.entries(immobile)) {
      if (value === null || !value) {
        res.json({ message: `${key} is missing` });
        return;
      }
    }
    await immobileModel.create(immobile);
    res.status(201).json(immobile);
    return;
  } else {
    res.json({ message: "method not allowed" });
    return;
  }
}
