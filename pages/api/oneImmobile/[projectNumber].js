import immobileModel from "@/models/immobileModel";
import { connectMongo } from "@/utils/connectMongo";
export default async function oneImmobile(req, res) {
  if (req.method === "GET") {
    const { projectNumber } = req.query;
    await connectMongo();

    if (projectNumber) {
      immobileModel
        .findOne({
          projectNumber: projectNumber,
        })
        .then((immobile) => {
          if (immobile) {
            res.status(200).json(immobile);
            return;
          } else {
            res.json({ message: "no Project was found with this Number" });
            return;
          }
        });
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
