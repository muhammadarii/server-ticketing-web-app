const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let organizersSchema = Schema(
  {
    organizer: {
      type: String,
      required: [true, "organizer name is required"],
    },
  },
  { timestamps: true }
);

module.exports = model("Organizer", organizersSchema);
