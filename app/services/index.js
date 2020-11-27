const userService = require("./users.service");
const authService = require("./auth.service");
const toursService = require("./tour.service");
const companyService = require("./company.service");
const customerService = require("./customer.service");
// const applicationService = require("./application.service");
const categoryService = require("./category.service");
const contactService = require("./contact.service");

module.exports = {
    userService,
    authService,
    toursService,
    companyService,
    customerService,
   // applicationService,
    categoryService,
    contactService
}