const router = require("express").Router();
const users = require("../../../app/controllers/admin/user");
const confirmJWT = require("../../middleware/confirmJWT")
// multer


// users
router.get("/users", users.getListUsers);

// create user
router.get("/users/create", users.viewCreatePage);
router.post("/users/create/seeker", users.createCustomer);
router.post("/users/create/company", users.createCompany);

// detail user
router.get("/users/:id", users.viewDetailUser);
router.post("/users/:id/update", users.updateUser);
router.post("/users/:id/delete", users.deleteUser);

// delete multi records
router.post("/users/delete-records", users.deleteUserRecords);

module.exports = router;
