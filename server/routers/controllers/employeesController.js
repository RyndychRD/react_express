const db = require("../../db");

const getEmployees = (req, res) => {
    db.query('SELECT employees.id, employees.first_name,employees.last_name,employees.middle_name,employees.phone_num, subdivisions.name as subdivision_name, positions.name as position_name ' +
        'FROM crud.employees as employees ' +
        'LEFT JOIN crud.subdivisions as subdivisions ON employees.subdivision_id=subdivisions.id ' +
        'LEFT JOIN crud.positions as positions on employees.position_id = positions.id ' +
        'ORDER BY employees.id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getEmployee = (req, res) => {
    const id = parseInt(req.params.id);
    if (id) {
        db.query('SELECT * ' +
            'FROM crud.employees ' +
            'WHERE id=' + id + ' ' +
            'ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows[0])
        })
    } else {
        res.json({})
    }
}

const updateEmployee = (req, res) => {
    const {firstName, lastName, middleName, subdivisionId, positionId, phoneNum, employeeId} = req.body
    db.query('UPDATE crud.employees SET first_name=$1, last_name=$2, middle_name=$3, subdivision_id=$4, position_id=$5, phone_num=$6 WHERE id=$7;', [firstName, lastName, middleName, subdivisionId, positionId, phoneNum, employeeId], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(results)
    })
}

const insertEmployee = (req, res) => {
    const {firstName, lastName, middleName, subdivisionId, positionId, phoneNum} = req.body
    db.query('INSERT INTO crud.employees(first_name, last_name, middle_name, subdivision_id, position_id, phone_num)' +
        ' VALUES ($1, $2, $3, $4, $5, $6);', [firstName, lastName, middleName, subdivisionId, positionId, phoneNum], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(results)
    })
}

const deleteEmployee = (req, res) => {
    const id = parseInt(req.params.id)
    db.query("DELETE FROM crud.employees WHERE id=$1", [id], (error, results) => {
        if (error) {
            throw error
        }
        res.send(results)
    })
}

module.exports = {
    getEmployees,
    getEmployee,
    updateEmployee,
    insertEmployee,
    deleteEmployee
}