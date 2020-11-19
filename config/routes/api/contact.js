const router = require('express').Router();
const {
    contact
} = require("../../../app/controllers/api");
router.post('/send-refer-friend', contact.sendReferFriendMail);


module.exports = router;