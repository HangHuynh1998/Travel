const router = require("express").Router();

const authRoute = require("./auth");
const userRoute = require("./users");
const toursRoute = require("./tours");
const companyRoute = require("./company");
const customersRoute = require("./customer");
// const applicationRoute = require("./applications");
const categoryRoute = require("./categories");
const utils = require("./utils");
const contact=require("./contact")

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/tours", toursRoute);
router.use("/company", companyRoute);
router.use("/customers", customersRoute);
// router.use("/applications", applicationRoute);
router.use("/category", categoryRoute);
router.use("/utils", utils);
router.use("/contact", contact);

module.exports = router;
