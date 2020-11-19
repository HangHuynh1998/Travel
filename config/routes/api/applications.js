const router = require("express").Router();
// Middleware
const { uploadMedia, jwtAuth, hasRole } = require("../../middleware");

const { applicationCtrl } = require("../../../app/controllers/api");

router.post("/", jwtAuth, hasRole('seeker'), uploadMedia.single("cv"), applicationCtrl.addApplication);
router.get("/", applicationCtrl.getAllApplications);
router.get("/:id", jwtAuth, applicationCtrl.getApplicationDetails);
router.post('/apply-job', applicationCtrl.sendMailApplyJob);

module.exports = router