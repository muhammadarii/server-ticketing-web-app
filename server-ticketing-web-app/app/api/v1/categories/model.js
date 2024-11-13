const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let categorySchema = new Schema(
  {
    name: {
      type: String,
      minlength: [3, "Panjang nama kategori minimal 3 karakter"],
      maxlength: [50, "Panjang nama kategori maksimal 50 karakter"],
      required: [true, "Nama kategori harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = model("Category", categorySchema);
