const express = require('express')
const {
    getEmployees,
    getEmployee,
    updateEmployee,
    insertEmployee,
    deleteEmployee
} = require("./controllers/employeesController");
const router = express.Router();

router.get('/', getEmployees)
router.get('/:id', getEmployee)

router.put('/', updateEmployee)
router.post('/', insertEmployee)

router.delete('/:id', deleteEmployee)

module.exports = router;