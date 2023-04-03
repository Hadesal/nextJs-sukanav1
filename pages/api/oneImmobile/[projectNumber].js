import immobileModel from "@/models/immobileModel";
import { connectMongo } from "@/utils/connectMongo";
import cors from "micro-cors";

const oneImmobile = async (req, res) => {
  if (req.method === "GET") {
    const { projectNumber } = req.query;
    await connectMongo();

    if (projectNumber) {
      try {
        const immobile = await immobileModel.findOne({ projectNumber });
        if (immobile) {
          return res.status(200).json(immobile);
        } else {
          return res.json({
            message: "No project was found with this number",
          });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          message: "An error occurred while searching for the project",
        });
      }
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
};
export default cors()(oneImmobile);
