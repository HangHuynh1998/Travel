const mongoose = require("mongoose");
const Tour = mongoose.model("Tour");
// const Job = mongoose.model("Job");
const Company = mongoose.model("Companie");
const Category = mongoose.model("Categorie");

mongoose.Promise = global.Promise;
const moment = require("moment");

getListTour = async (req, res) => {
  try {
    let tour = await Tour.find().populate({
      path: "company_id",
      model: "Companie",
      populate: [
          {
              path: "user_id",
              model: "User"
          }
      ],
  }).populate('category_id')
      .sort("-updatedAt")
      .exec();
    return res.render("admin/tours/index", {
      titlePage: "Tours",
      tours: tour,
      moment: moment
    });
  } catch (err) {
    return err;
  }
};

viewCreatePage = async (req, res) => {
  let companies = await Company.find().populate('user_id').exec();
  let categories = await Category.find().exec(); 
  return res.render("admin/tours/create", {
    titlePage: "Tours Create",
    companies,
    categories
  });
};

createTour = async (req, res) => {
    try {
      let data = req.body;
      let tour = new Tour(data);
      await tour.save();
      let company = await Company.findById(data.company_id);
      company.available_jobs++;
      await company.save();
      return res.redirect("/admin/tours");
    } catch (err) {
    }
  }

viewDetailTour = async (req, res) => {
  try {
    let { id } = req.params;
    let tour = await Tour.findById(id).exec();
    let _data = {
      titlePage: "Detail",
      moment: moment,
      job,
      // company
    };
    return res.render("admin/tours/detail", _data);
  } catch (error) {
    return error;
  }
};


deleteTour = async (req, res) => {
  const { id } = req.params;
  let tour = await Tour.deleteOne({ _id: id }).exec();
  return res.redirect("/admin/tours");
};

// delete multi reocords
deleteTourRecords = async (req, res) => {
  try {
    let data = req.body;
    let list_del = data._arr;
    list_del.map(async val => {
      const tour = await Tour.deleteOne(
        { _id: val },
        (err, result) => {
          if (err) return res.status(400).json({ status: "error" });
        }
      ).exec();
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
};

//update tour
updateTour = async (req, res) => {
  try {
    const { id } = req.params;
    let _data = req.body;
    let tour = await Tour.findOneAndReplace(
      { _id: id },
      { $set: _data.job },
      (err, response) => {
        if (err) throw err;
      }
    ).exec();
    return res
      .status(200)
      .json({ status: "success", msg: "Updated successfully!" });
  } catch (err) {
    return res.status(400).json({ status: "error" });
  }
};

module.exports = {
  getListTour,
  createTour,
  viewCreatePage,
  viewDetailTour,
  deleteTour,
  deleteTourRecords,
  updateTour
};
