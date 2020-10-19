const Tour = require('../models/tours');
const Company = require('../models/companies');
const moment = require('moment');

const CronJob = require('cron').CronJob
const {
    checkTours: checkToursConfig,
} = require('./config')

stopTour = (tour) => tour.stop();
startTour = (tour) => tour.start();

const checkToursExpired = async () => {
    try {
        let tours = await Tour.find({ status: "open" });
        if (!tours) {
            console.log("No tours open")
        } else {
            tours.forEach(async tour => {
                if (moment(tour.dueDate).isBefore(moment())) {
                    tour.status = "expired";
                    await tour.save();
                    let company = await Company.findById(tour.company_id);
                    company.available_jobs--;
                    await company.save();
                    console.log("Tours with id " + tour._id + " has expired.");
                }
            })
        }
    } catch (error) {
    }
}


module.exports = () => {
    let times = checkToursConfig.cronTime;
    let tours = times.map(cronTime => {
        return new CronJob({
            cronTime,
            onTick: async () => {
                checkToursExpired();
            },
            start: true,
            // timeZone: 'Asia/Ho_Chi_Minh'
        })
    })

    return {
        start: () => {
            tours.forEach(startTour)
        },
        stop: () => {
            tours.forEach(stopTour)
        }
    }
}