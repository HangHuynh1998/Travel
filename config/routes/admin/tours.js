const router = require("express").Router();
const tours = require("../../../app/controllers/admin/tour");
const confirmJWT = require("../../middleware/confirmJWT")

// create user
router.get("/tour/create", tours.viewCreatePage);
// router.post("/users/create", tours.createUser);

// users
router.get("/tours", tours.getListTour);

// detail user
router.get("/tours/:id", tours.viewDetailTour);

router.post("/tours/create", tours.createTour);

router.post("/tours/:id/delete", tours.deleteTour);

// delete multi records
router.post("/tours/delete-records", tours.deleteTourRecords);

router.post("/tours/:id/update", tours.updateTour);


module.exports = router;
