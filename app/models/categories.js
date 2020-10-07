const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
  },
  {
    timestamps: true
  }
);

const dataMigrate = [
    {
        name: "Trong nước",
        description: "Du lịch trong nước"
    },
    {
        name: "Nước ngoài",
        description: "Du lịch nước ngoài"
    },
    {
      name: "Giá tốt",
      description: "Giá tốt"
    }, 
    {
      name: "Tự chọn",
      description: "Tự chọn"
    }, 
    {
      name: "Tìm kiếm",
      description: "Tìm kiếm"
    }, 
    {
      name: "Hội viên",
      description: "Hôi viên"
    }, 
    
];

CategorySchema.statics.getMigrateData = function() {
  return dataMigrate;
};

module.exports = mongoose.model("Categorie",CategorySchema);
