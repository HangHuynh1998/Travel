const router = require("express").Router();
const jobs = require("../../../app/controllers/admin/jobs");
const confirmJWT = require("../../middleware/confirmJWT")

// create user
router.get("/jobs/create", jobs.viewCreatePage);
// router.post("/users/create", jobs.createUser);

// users
router.get("/jobs", jobs.getListJob);

// detail user
router.get("/jobs/:id", jobs.viewDetailJob);

router.post("/jobs/create", jobs.createJob);

router.post("/jobs/:id/delete", jobs.deleteJob);

// delete multi records
router.post("/jobs/delete-records", jobs.deleteJobRecords);

router.post("/jobs/:id/update", jobs.updateJob);


module.exports = router;
