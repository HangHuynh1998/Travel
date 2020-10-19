const mongoose = require("mongoose");
<<<<<<< HEAD
const Tour = mongoose.model("TOur");
=======
const Job = mongoose.model("Job");
>>>>>>> c222daa43fa46bad186c1d2fa91083c2befbdfea
const Company = mongoose.model("Companie");
const Category = mongoose.model("Categorie");

mongoose.Promise = global.Promise;
const moment = require("moment");

<<<<<<< HEAD
getListTour = async (req, res) => {
  try {
    let tour = await Tour.find().populate({
=======
getListJob = async (req, res) => {
  try {
    let job = await Job.find().populate({
>>>>>>> c222daa43fa46bad186c1d2fa91083c2befbdfea
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
<<<<<<< HEAD
    return res.render("admin/tours/index", {
      titlePage: "Tours",
      tours: tour,
=======
    return res.render("admin/jobs/index", {
      titlePage: "Jobs",
      jobs: job,
>>>>>>> c222daa43fa46bad186c1d2fa91083c2befbdfea
      moment: moment
    });
  } catch (err) {
    return err;
  }
};

viewCreatePage = async (req, res) => {
  let companies = await Company.find().populate('user_id').exec();
  let categories = await Category.find().exec(); 
<<<<<<< HEAD
  return res.render("admin/tours/create", {
    titlePage: "Tours Create",
=======
  return res.render("admin/jobs/create", {
    titlePage: "Job Create",
>>>>>>> c222daa43fa46bad186c1d2fa91083c2befbdfea
    companies,
    categories
  });
};

<<<<<<< HEAD
createTour = async (req, res) => {
    try {
      let data = req.body;
      let tour = new Tour(data);
      await tour.save();
      let company = await Company.findById(data.company_id);
      company.available_jobs++;
      await company.save();
      return res.redirect("/admin/tours");
=======
createJob = async (req, res) => {
    try {
      let data = req.body;
      let job = new Job(data);
      await job.save();
      let company = await Company.findById(data.company_id);
      company.available_jobs++;
      await company.save();
      return res.redirect("/admin/jobs");
>>>>>>> c222daa43fa46bad186c1d2fa91083c2befbdfea
    } catch (err) {
    }
  }

<<<<<<< HEAD
viewDetailTour = async (req, res) => {
  try {
    let { id } = req.params;
    let tour = await Tour.findById(id).exec();
=======
viewDetailJob = async (req, res) => {
  try {
    let { id } = req.params;
    let job = await Job.findById(id).exec();
>>>>>>> c222daa43fa46bad186c1d2fa91083c2befbdfea
    let _data = {
      titlePage: "Detail",
      moment: moment,
      job,
      // company
    };
<<<<<<< HEAD
    return res.render("admin/tours/detail", _data);
=======
    return res.render("admin/jobs/detail", _data);
>>>>>>> c222daa43fa46bad186c1d2fa91083c2befbdfea
  } catch (error) {
    return error;
  }
};


<<<<<<< HEAD
deleteTour = async (req, res) => {
  const { id } = req.params;
  let tour = await Tour.deleteOne({ _id: id }).exec();
  return res.redirect("/admin/tours");
};

// delete multi reocords
deleteTourRecords = async (req, res) => {
=======
deleteJob = async (req, res) => {
  const { id } = req.params;
  let job = await Job.deleteOne({ _id: id }).exec();
  return res.redirect("/admin/jobs");
};

// delete multi reocords
deleteJobRecords = async (req, res) => {
>>>>>>> c222daa43fa46bad186c1d2fa91083c2befbdfea
  try {
    let data = req.body;
    let list_del = data._arr;
    list_del.map(async val => {
<<<<<<< HEAD
      const tour = await Tour.deleteOne(
=======
      const job = await Job.deleteOne(
>>>>>>> c222daa43fa46bad186c1d2fa91083c2befbdfea
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

<<<<<<< HEAD
//update tour
updateTour = async (req, res) => {
  try {
    const { id } = req.params;
    let _data = req.body;
    let tour = await Tour.findOneAndReplace(
=======
//update job
updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    let _data = req.body;
    let job = await Job.findOneAndReplace(
>>>>>>> c222daa43fa46bad186c1d2fa91083c2befbdfea
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
<<<<<<< HEAD
  getListTour,
  createTour,
  viewCreatePage,
  viewDetailTour,
  deleteTour,
  deleteTourRecords,
  updateTour
=======
  getListJob,
  createJob,
  viewCreatePage,
  viewDetailJob,
  deleteJob,
  deleteJobRecords,
  updateJob
>>>>>>> c222daa43fa46bad186c1d2fa91083c2befbdfea
};
