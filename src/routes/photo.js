const express = require('express');
const router = express.Router();

const photoController = require('../app/controllers/PhotoController');

router.get('/:id',photoController.getPhoto);
router.get('/', photoController.index);

module.exports = router;

