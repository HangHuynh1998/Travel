module.exports = {
    backupJob: {
        cronTime: ["00 59 23 * * *"] // At every 23:59:00
    },
    checkJobs: {
        cronTime: ["00 00 00 * * *"] // At every 00:00:00
    },
}