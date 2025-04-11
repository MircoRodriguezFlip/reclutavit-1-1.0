const express = require('express');
const { getJobsController } = require('../controllers/jobsController');

const router = express.Router();

router.get('/jobs', getJobsController);

module.exports = router;
