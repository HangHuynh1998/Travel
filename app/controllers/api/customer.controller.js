const { customerService } = require("../../services");

const getCustomer = (req, res) => {
    let id = req.params.id;
    customerService.getCustomer("_id", id)
    .then(data => {
        res.sendData(data);
    })
    .catch(err => {
        res.sendData(err.message);
    })
}

const getCustomerUserid = (req, res) => {
    let id = req.params.id;
    customerService.getCustomer("user_id", id)
    .then(data => {
        res.sendData(data);
    })
    .catch(err => {
        res.sendData(err.message);
    })
}

const getAllCustomer = (req, res) => {
    customerService.getAllCustomer()
        .then(data => {
            res.sendData(data);
        })
        .catch(err => {
            res.sendError(err.message);
        })
};

const getBooktour = (req, res) => {
    customerService.getBooktour(req.user._id)
    .then(data => {
        res.sendData(data);
    })
    .catch(err => {
        res.sendError(err.message);
    })
}
// SAVED JOBS

const getAllSavedTours = (req, res) => {
    customerService.getAllSavedTours(req.user._id)
    .then(data => {
        res.sendData(data);
    })
    .catch(err => {
        res.sendError(err.message);
    })
}

const toggleSavedTour = (req, res) => {
    customerService.toggleSavedTour(req.user._id, req.params.job_id)
    .then(data => {
        res.sendData(data);
    })
    .catch(err => {
        res.sendError(err.message);
    })
}

// APPLICATIONS
const getCustomerBooktour = (req, res) => {
    customerService.getCustomerBooktour(req.user._id)
        .then(data => {
            res.sendData(data);
        })
        .catch(err => {
            res.sendError(err.message);
        })
};

// FOLLOWED COMPANY

const getFollowedCompany = (req, res) => {
    jobseekerService.getFollowedCompany(req.user._id)
    .then(data => {
        res.sendData(data);
    })
    .catch(err => {
        res.sendError(err.message);
    })
}

const toggleFollowCompany = (req, res) => {
    jobseekerService.toggleFollowCompany(req.user._id, req.params.company_id)
    .then(data => {
        res.sendData(data);
    })
    .catch(err => {
        res.sendError(err.message);
    })
}

module.exports = {
    getCustomer,
    getCustomerUserid,
    getAllCustomer,
    getBooktour,
    getAllSavedTours,
    toggleSavedTour,
    // APPLICATIONS
    getCustomerBooktour,
    getFollowedCompany,
    toggleFollowCompany

}