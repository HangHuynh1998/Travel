const router = require("express").Router();
// Controller
const { jobCtrl } = require("../../../app/controllers/api");
// Middleware
const {
    jwtAuth, hasRole
} = require('../../middleware');

router.post("/", jwtAuth, hasRole('company'), jobCtrl.addJob);
router.get("/", jobCtrl.getAllJobs);
router.get("/:id/category", jobCtrl.getCategoryJobs);
router.get("/:id", jobCtrl.getJobDetails);
router.put("/:id", jwtAuth, hasRole('company'), jobCtrl.editJob);
router.delete("/:id",jwtAuth, hasRole('company'), jobCtrl.deleteJob);
module.exports = router