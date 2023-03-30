import immobileModel from "@/models/immobileModel";
import { connectMongo } from "@/utils/connectMongo";

export default async function deleteImmobile(req, res) {
  if (req.method == "DELETE") {
    await connectMongo();
    const { projectNumber } = req.query;
    if (projectNumber) {
      const deleteReq = await immobileModel.deleteOne({ projectNumber });
      if (deleteReq.deletedCount > 0) {
        return res.json({ message: "Deleted successfully" });
      } else {
        return res.json({ message: "Couldn't delete project not found" });
      }
    }
  } else {
    return res.json({
      message:
        "method is not allowed pleas make sure you are making a DELETE request",
    });
  }
}
