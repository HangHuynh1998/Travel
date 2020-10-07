const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    saved_jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }],
    choose_tours: [{ type: Schema.Types.ObjectId, ref: 'Tour' }],
    followed_companies: [{ type: Schema.Types.ObjectId, ref: 'Companie' }],
  },
  {
    timestamps: true
  }
);

const dataMigrate = [];

CustomerSchema.statics.getMigrateData = function () {
  return dataMigrate;
};

module.exports = mongoose.model("Customer", CustomerSchema);
