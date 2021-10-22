const {GhostMetrics} = require('@tryghost/metrics');
const metrics = new GhostMetrics(JSON.stringify(process.env.CONFIGURATION));

(async () => {
    await metrics.metric(process.env.METRICNAME, process.env.METRICVALUE);
})();
