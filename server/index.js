const express = require('express');
const app = express();
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))
const port = 5000;

const employees = require('./routers/employees');
const subdivisions = require('./routers/subdivisions');
const positions = require('./routers/positions');

app.use('/api/employees', employees)
app.use('/api/subdivisions', subdivisions)
app.use('/api/positions', positions)

app.listen(port, () => console.log(`Listening on port ${port}`));
