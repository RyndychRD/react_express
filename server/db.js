const Pool = require('pg').Pool
const config = require('./config/database.json')
const db = new Pool(config.dev)

module.exports = db;