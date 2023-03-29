const { Schema, model, models } = require("mongoose");

const immobileSchema = new Schema({
  projectNumber: { type: Number, required: true, unique: true },
  immobileType: String,
  details: {
    bedRooms: { type: Number },
    bathRooms: { type: Number },
    size: { type: Number },
    description: { type: String },
  },
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

const immobileModel =
  models.SukanaImmobile || model("SukanaImmobile", immobileSchema);
export default immobileModel;
