const core = require('@actions/core');
const {GhostMetrics} = require('@tryghost/metrics');
const metrics = new GhostMetrics(JSON.parse(core.getInput('configuration')));

(async () => {
    await metrics.metric(core.getInput('metricName'), core.getInput('metricValue'));
})();
