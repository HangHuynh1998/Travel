const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanieSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category_id: { type: Schema.Types.ObjectId, ref: 'Categorie', required: true },
    tour_id: { type: Schema.Types.ObjectId, ref: 'Tour', required: true },
    numberTour: { type: Number, default: 0 },
    name: { type: String },
    description: {type:String}
  },
  {
    timestamps: true
  }
);

const dataMigrate = [];

CompanieSchema.statics.getMigrateData = function () {
  return dataMigrate;
};

module.exports = mongoose.model("Companie", CompanieSchema);