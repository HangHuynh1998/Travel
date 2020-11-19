const router = require("express").Router();

const { categoryCtrl } = require("../../../app/controllers/api");

router.get("/", categoryCtrl.getAllCategories);
router.get("/:id", categoryCtrl.getCategoryDetail);
module.exports = router