const CronJob = require('cron').CronJob
const shell = require('shelljs');
const {
    backupTour: backupTourConfig,
} = require('./config')

stopTour = (tour) => tour.stop();
startTour = (tour) => tour.start();

module.exports = () => {
    let times = backupTourConfig.cronTime;
    let tours = times.map(cronTime => {
        return new CronJob({
            cronTime,
            onTick: async () => {
                if (process.env.NODE_ENV != 'development') {
                    console.log('Tour backup DB is running...');
                    try {
                        await shell.exec('npm run start:backup');
                    } catch (er) {
                        console.log('Tour backup DB has error', er.message);
                    }
                    console.log('Job backup DB finished');
                }
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