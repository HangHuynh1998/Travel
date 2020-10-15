const mongoose = require("mongoose");
const Job = mongoose.model("Job");
const Company = mongoose.model("Companie");
const Category = mongoose.model("Categorie");

mongoose.Promise = global.Promise;
const moment = require("moment");

getListJob = async (req, res) => {
  try {
    let job = await Job.find().populate({
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
    return res.render("admin/jobs/index", {
      titlePage: "Jobs",
      jobs: job,
      moment: moment
    });
  } catch (err) {
    return err;
  }
};

viewCreatePage = async (req, res) => {
  let companies = await Company.find().populate('user_id').exec();
  let categories = await Category.find().exec(); 
  return res.render("admin/jobs/create", {
    titlePage: "Job Create",
    companies,
    categories
  });
};

createJob = async (req, res) => {
    try {
      let data = req.body;
      let job = new Job(data);
      await job.save();
      let company = await Company.findById(data.company_id);
      company.available_jobs++;
      await company.save();
      return res.redirect("/admin/jobs");
    } catch (err) {
    }
  }

viewDetailJob = async (req, res) => {
  try {
    let { id } = req.params;
    let job = await Job.findById(id).exec();
    let _data = {
      titlePage: "Detail",
      moment: moment,
      job,
      // company
    };
    return res.render("admin/jobs/detail", _data);
  } catch (error) {
    return error;
  }
};


deleteJob = async (req, res) => {
  const { id } = req.params;
  let job = await Job.deleteOne({ _id: id }).exec();
  return res.redirect("/admin/jobs");
};

// delete multi reocords
deleteJobRecords = async (req, res) => {
  try {
    let data = req.body;
    let list_del = data._arr;
    list_del.map(async val => {
      const job = await Job.deleteOne(
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

//update job
updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    let _data = req.body;
    let job = await Job.findOneAndReplace(
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
  getListJob,
  createJob,
  viewCreatePage,
  viewDetailJob,
  deleteJob,
  deleteJobRecords,
  updateJob
};
