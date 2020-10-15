const mongoose = require("mongoose");
const Application = mongoose.model("Application");
const Job = mongoose.model("Job");
mongoose.Promise = global.Promise;
const moment = require("moment");

getListApplications = async (req, res) => {
  try {
    let application = await Application.find()
      .populate("job_id")
      .sort("-updatedAt")
      .exec();
    return res.render("admin/applications/index", {
      titlePage: "Applications",
      applications: application,
      moment: moment
    });
  } catch (err) {
    return err;
  }
};

viewCreatePage = async (req, res) => {
  let applications = await Job.find().exec();
  return res.render("admin/applications/create", {
    titlePage: "Application Create",
    applications
  });
};

viewDetailApplication = async (req, res) => {
  try {
    let { id } = req.params;
    let application = await Application.findById(id).exec();

    let _data = {
      titlePage: "Detail",
      moment: moment,
      application
    };
    return res.render("admin/applications/detail", _data);
  } catch (error) {
    return error;
  }
};

deleteApplication = async (req, res) => {
  const { id } = req.params;
  let application = await Application.deleteOne({ _id: id }).exec();
  return res.redirect("/admin/applications");
};

// delete multi reocords
deleteApplicationRecords = async (req, res) => {
  try {
    let data = req.body;
    let list_del = data._arr;
    list_del.map(async val => {
      const application = await Application.deleteOne(
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

updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    let _data = req.body;
    await Application.findOneAndReplace(
      { _id: id },
      { $set: _data.application },
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
  getListApplications,
  viewCreatePage,
  viewDetailApplication,
  deleteApplication,
  deleteApplicationRecords,
  updateApplication
};
