const metrics = require('@tryghost/metrics');

(async () => {
    await metrics.metric(process.env.METRICNAME, process.env.METRICVALUE);
})();
