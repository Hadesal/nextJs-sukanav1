import immobileModel from "@/models/immobileModel";
import { connectMongo } from "@/utils/connectMongo";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "6mb",
    },
  },
};

export default async function newImmobile(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    connectMongo();
    const { immobileObject } = req.body;

    const { projectNumber } = immobileObject;
    for (const [key, value] of Object.entries(immobileObject)) {
      if (value === null || !value) {
        return res.json({ message: `${key} is missing` });
      }
    }
    const found = await immobileModel.findOne({ projectNumber: projectNumber });
    if (found) {
      return res.json({ message: "this project does already exist" });
    }

    await immobileModel.create(immobileObject);
    return res.status(201).json({ message: "Created Successfully " });
  } else {
    return res.json({ message: "method not allowed" });
  }
}
