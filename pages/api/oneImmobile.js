import immobileModel from "@/models/immobileModel";
import { connectMongo } from "@/utils/connectMongo";

export default async function getOneImmobile(req, res) {
  if (req.method == "GET") {
    await connectMongo();

    const { projectNumber } = req.body;
    if (projectNumber) {
      const oneProject = immobileModel.findOne({
        projectNumber: projectNumber,
      });
      if (oneProject) {
        res.status(200).json(oneProject);
        return;
      } else {
        res.json({ message: "no Project was found with this Number" });
        return;
      }
    } else {
      res.json({
        message: "Please make sure you entered a valid projectNumber",
      });
      return;
    }
  } else {
    res.json({
      message:
        "Invalid request method please make sure you are making a GET request",
    });
    return;
  }
}
