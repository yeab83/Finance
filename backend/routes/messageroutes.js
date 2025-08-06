const express = require('express');
const { createMessages, getAllMessages } = require('../controller/messages');
const router = express.Router();

router.post('/', createMessages);

router.get('/', getAllMessages);

module.exports = router;
