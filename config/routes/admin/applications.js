const router = require("express").Router();
const applications = require("../../../app/controllers/admin/applications");
const confirmJWT = require("../../middleware/confirmJWT")

router.get("/applications", applications.getListApplications);
router.get("/applications/:id", applications.viewDetailApplication);
router.post("/applications/:id/delete", applications.deleteApplication);

router.post("/applications/delete-records", applications.deleteApplicationRecords);

router.post("/applications/:id/update", applications.updateApplication);


module.exports = router;
