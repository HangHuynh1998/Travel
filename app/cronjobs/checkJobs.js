const Tour = require('../models/tour');
const Company = require('../models/companies');
const moment = require('moment');

const CronJob = require('cron').CronJob
const {
    checkJobs: checkJobsConfig,
} = require('./config')

stopJob = (job) => job.stop();
startJob = (job) => job.start();

const checkJobsExpired = async () => {
    try {
        let jobs = await Job.find({ status: "open" });
        if (!jobs) {
            console.log("No jobs open")
        } else {
            jobs.forEach(async job => {
                if (moment(job.dueDate).isBefore(moment())) {
                    job.status = "expired";
                    await job.save();
                    let company = await Company.findById(job.company_id);
                    company.available_jobs--;
                    await company.save();
                    console.log("Job with id " + job._id + " has expired.");
                }
            })
        }
    } catch (error) {
    }
}


module.exports = () => {
    let times = checkJobsConfig.cronTime;
    let jobs = times.map(cronTime => {
        return new CronJob({
            cronTime,
            onTick: async () => {
                checkJobsExpired();
            },
            start: true,
            // timeZone: 'Asia/Ho_Chi_Minh'
        })
    })

    return {
        start: () => {
            jobs.forEach(startJob)
        },
        stop: () => {
            jobs.forEach(stopJob)
        }
    }
}