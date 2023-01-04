const express = require('express')
const cors = require('cors')
// const logger = require('morgan')

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.Port || 8000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => res.json({message: 'Server works'}))
app.use('/api', AppRouter)

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))