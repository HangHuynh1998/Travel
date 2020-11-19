const router = require("express").Router();

const authRoute = require("./auth");
const userRoute = require("./users");
const jobRoute = require("./jobs");
const companyRoute = require("./company");
const jobseekerRoute = require("./jobseeker");
const applicationRoute = require("./applications");
const categoryRoute = require("./categories");
const utils = require("./utils");
const contact=require("./contact")

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/jobs", jobRoute);
router.use("/company", companyRoute);
router.use("/jobseekers", jobseekerRoute);
router.use("/applications", applicationRoute);
router.use("/category", categoryRoute);
router.use("/utils", utils);
router.use("/contact", contact);

module.exports = router;
