const authCtrl = require("./auth.controller");
const userCtrl = require("./users.controller");
const tourCtrl = require("./tours.controller");
const companyCtrl = require("./company.controller");
const customerCtrl = require("./customer.controller");
const booktourCtrl = require("./booktours.controller");
const categoryCtrl = require("./categories.controller");
const utils = require("./utils");
const contact = require("./contact.controller");

module.exports = {
    authCtrl,
    userCtrl,
    tourCtrl,
    companyCtrl,
    customerCtrl,
    booktourCtrl,
    categoryCtrl,
    utils,
    contact
}