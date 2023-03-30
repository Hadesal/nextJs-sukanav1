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
            return res.status(200).json(immobile);
          } else {
            return res.json({
              message: "no Project was found with this Number",
            });
          }
        });
    } else {
      return res.json({
        message: "Please make sure you entered a valid projectNumber",
      });
    }
  } else {
    return res.json({
      message:
        "Invalid request method please make sure you are making a GET request",
    });
  }
}
