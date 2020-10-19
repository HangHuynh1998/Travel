const mongoose = require("mongoose");
const User = mongoose.model("User");
const Customer = mongoose.model("Customer");
const Company = mongoose.model("Companie");
const Category = mongoose.model("Categorie");
const bcrypt = require("bcryptjs");
const moment = require("moment");
mongoose.Promise = global.Promise;

getListUsers = async (req, res) => {
  let user = await User.find()
    .sort("-updatedAt")
    .exec();

  return res.render("admin/users/index", {
    titlePage: "Users",
    users: user,
    moment: moment
  });
};

viewCreatePage = async (req, res) => {
  let categories = await Category.find().exec(); 
  return res.render("admin/users/create", {
    titlePage: "User Create",
    categories
  });
};

createCustomer = async (req, res) => {
  const {
    name,
    email,
    password,
    birthday,
    phone,
    address,
  } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    birthday,
    role: "customer",
    phone,
    address,
  });

  try {
    await user.save();
    const customer = new Customer({
      birthday,
      phone,
      address,
      user_id: user._id
    });
    await customer.save();
    return res.redirect("/admin/users");
  } catch (error) {
  }
  
};


createCompany = async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    phone,
    description,
    category_id,
    position
  } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    role: "company",
    phone,
    address,
    description
  });

  try {
    await user.save();

    const company = new Company({
      name,
      category_id:category_id,
      position:position,
      user_id: user._id
    });
    await company.save();
    return res.redirect("/admin/users");
  } catch (error) {
  }
};

// detail user
viewDetailUser = async (req, res) => {
  const { id } = req.params;
  let user = await User.findById(id).exec();
  let _data = {
    titlePage: "Detail",
    moment: moment,
    user,
  };
  return res.render("admin/users/detail", _data);
};

// delete user
deleteUser = async (req, res) => {
  const { id } = req.params;
  let user = await User.deleteOne({ _id: id }).exec();

  return res.redirect("/admin/users");
};

// delete multi reocords
deleteUserRecords = async (req, res) => {
  try {
    let data = req.body;
    let list_del = data._arr;
    list_del.map(async val => {
      const user = await User.deleteOne(
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

// update user
updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    let _data = req.body;
    let user = await User.findOneAndUpdate(
      { _id: id },
      { $set: _data.user },
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
  getListUsers,
  createCustomer,
  createCompany,
  viewCreatePage,
  viewDetailUser,
  deleteUser,
  updateUser,
  deleteUserRecords
};
