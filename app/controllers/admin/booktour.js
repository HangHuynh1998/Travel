const mongoose = require("mongoose");
const Booktour = mongoose.model("Booktour");
const Tour = mongoose.model("Tour");
mongoose.Promise = global.Promise;
const moment = require("moment");

getListBooktours = async (req, res) => {
  try {
    let booktour = await Booktour.find()
      .populate("tour_id")
      .sort("-updatedAt")
      .exec();
    return res.render("admin/booktour/index", {
      titlePage: "Tour",
      tour: tour,
      moment: moment
    });
  } catch (err) {
    return err;
  }
};

viewCreatePage = async (req, res) => {
  let booktour = await Tour.find().exec();
  return res.render("admin/booktour/create", {
    titlePage: "Booktour Create",
    booktour
  });
};

viewDetailBooktour = async (req, res) => {
  try {
    let { id } = req.params;
    let booktour = await Booktour.findById(id).exec();

    let _data = {
      titlePage: "Detail",
      moment: moment,
      booktour
    };
    return res.render("admin/booktour/detail", _data);
  } catch (error) {
    return error;
  }
};

deleteBooktour = async (req, res) => {
  const { id } = req.params;
  let booktour = await Booktour.deleteOne({ _id: id }).exec();
  return res.redirect("/admin/booktour");
};

// delete multi reocords
deleteBooktourRecords = async (req, res) => {
  try {
    let data = req.body;
    let list_del = data._arr;
    list_del.map(async val => {
      const booktour = await Booktour.deleteOne(
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

updateBooktour = async (req, res) => {
  try {
    const { id } = req.params;
    let _data = req.body;
    await Booktour.findOneAndReplace(
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
  getListBooktours,
  viewCreatePage,
  viewDetailBooktour,
  deleteBooktour,
  deleteBooktourRecords,
  updateBooktour
};
