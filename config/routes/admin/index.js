const router = require("express").Router();
const moment = require('moment');
const {  confirmJWT, getAvatar } = require("../../middleware");
const authCtrl = require("../../../app/controllers/admin/auth");

const profile = require("./profile");
const users = require("./users");
const jobs = require("./jobs");
const applications = require("./applications");
const category = require("./category");

// Controllers
// const  {
// } = require("../../../app/controllers/admin");

// Middleware
const {
} = require("../../../config/middleware");

// login
router.get("/login", authCtrl.viewLoginPage);
router.post("/login", authCtrl.login);

// confirm session
router.use(confirmJWT);
router.use(getAvatar);
// router.use(jwtAuth);

// dashboard
router.get("/", (req, res) => {
    res.render("admin/dashboard/index", {
        titlePage: "Dashboard"
    })
});

// profile
router.use(profile);

// user
router.use(users);

// jobs
router.use(jobs);


// applications
router.use(applications);

// category
router.use(category);



module.exports = router;