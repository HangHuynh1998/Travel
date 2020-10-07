const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourSchema = new Schema({
    company_id: { type: Schema.Types.ObjectId, ref: 'Companie', required: true },
    category_id: { type: Schema.Types.ObjectId, ref: 'Categorie', required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    content: { type: String, required: true },
    image : { type: String, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    description: { type: String, required: true },
    status: { type: String, enum: ["open", "expired"], default: "open" },
    // isApplied: {type : Array},
    isChoosed: [{ type: Schema.Types.ObjectId, ref: 'Customer' }]
}, {
        timestamps: true,
    })

const dataMigrate = [];
TourSchema.statics.getMigrateData = function () {
    return dataMigrate;
}

module.exports = mongoose.model('Tour', TourSchema);