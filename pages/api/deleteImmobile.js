import immobileModel from "@/models/immobileModel";
import { connectMongo } from "@/utils/connectMongo";

export default async function deleteImmobile(req, res) {
  if (req.method == "DELETE") {
    await connectMongo();
    const { projectNumber } = req.body;
    if (projectNumber) {
      const deleteReq = await immobileModel.deleteOne({ projectNumber });
      if (deleteReq.deletedCount > 0) {
        res.json({ message: "Deleted successfully" });
        return;
      } else {
        res.json({ message: "Couldn't delete project not found" });
        return;
      }
    }
  } else {
    res.json({
      message:
        "method is not allowed pleas make sure you are making a DELETE request",
    });
    return;
  }
}
