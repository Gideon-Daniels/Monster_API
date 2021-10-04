const {Router}= require('express');
const monsters = require('./monsters');
const habitats = require('./habitats');
const lives = require('./lives');
const app = require('../app');

const router = Router();
// routing middleware
router.use('/monsters', monsters);
router.use('/habitats', habitats)
router.use('/lives', lives)

module.exports = router
