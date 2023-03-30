const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
  fullName: String,
  email: String,
  password: String,
  birthDate: Date,
});

const userModel = models.SukanaUsers || model("SukanaUsers", userSchema);

export default userModel;
