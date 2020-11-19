const router = require('express').Router();

const {
    uploadMedia
} = require('../../middleware');
const {
    authCtrl
} = require("../../../app/controllers").apiCtrl;

router.post("/login", authCtrl.login);

router.get("/profile", authCtrl.getProfile);

router.post("/register/company", uploadMedia.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'background', maxCount: 1 }
]), authCtrl.register('company'));

router.post("/register/seeker", authCtrl.register("seeker"));
router.post("/forgot-password", authCtrl.forgotPassword);
router.post("/reset-password", authCtrl.resetPassword);
router.post("/check-email", authCtrl.checkEmailAvailable);
module.exports = router;