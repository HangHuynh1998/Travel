const router = require("express").Router();
const category = require("../../../app/controllers/admin/category");

// create category
router.get("/categories/create", category.viewCreateCategory);
router.post("/categories/create", category.createCategory);

// update category
router.get("/categories/:id", category.viewCategory);
router.post("/categories/:id", category.updateCategory);
router.post("/categories/:id/delete", category.deleteCategory);

// all categories
router.get("/categories", category.viewAllCategories);

// delete category records
router.post("/categories-delete-records", category.deleteRecordsCategory);


module.exports = router;