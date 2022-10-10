const db = require("../../db");

const getPositions = (req, res) => {
    db.query('SELECT * FROM crud.positions', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    });
}

module.exports = {
    getPositions
}

