import userModel from "@/models/userModel";
import { connectMongo } from "@/utils/connectMongo";
import { comparePassword } from "@/utils/hashPassword";

export default async function admin(req, res) {
  if (req.method === "POST") {
    await connectMongo();

    res.setHeader("Content-Type", "application/json");

    const { password, email } = req.body;

    if (password && email) {
      try {
        const admin = await userModel.findOne({ email: email });
        if (admin) {
          const result = await comparePassword(password, admin.password);
          if (result === true) {
            return res.status(200).json({ isAdmin: result });
          } else {
            return res.status(403).json({ message: "password does not match" });
          }
        } else {
          return res.status(404).json({ message: "no user found " });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "server error" });
      }
    } else {
      return res
        .status(400)
        .json({ message: "please be sure you send required data" });
    }
  } else {
    return res.status(405).json({
      message: "method is not allowed please make sure to make a POST request",
    });
  }
}
