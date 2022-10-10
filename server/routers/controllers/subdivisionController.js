const db = require("../../db");

const getSubdivisions = (req, res) => {
    db.query('SELECT * FROM crud.subdivisions', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    });
}

module.exports = {
    getSubdivisions
};