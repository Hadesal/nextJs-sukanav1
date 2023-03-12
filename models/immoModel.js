const { Schema, model, models } = require("mongoose");

const immoSchema = new Schema({
  projectNumber: { type: Number, required: true, unique: true },
  immoType: String,
  details: String,
  completionOfBuild: Date,
  livingSpace: Number,
  price: Number,
  location: String,
  city: String,
  address: String,
  rooms: Number,
  images: [
    {
      type: String,
    },
  ],
  zib: Number,
});

const immoModel = models.SukanaImmobile || model("SukanaImmobile", immoSchema);
export default immoModel;
