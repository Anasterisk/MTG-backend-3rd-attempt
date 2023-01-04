const express = require('express')
const cors = require('cors')
// const logger = require('morgan')

const PORT = process.env.Port || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))