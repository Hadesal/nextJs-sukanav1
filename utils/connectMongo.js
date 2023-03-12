const { default: mongoose } = require("mongoose");

export const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);
