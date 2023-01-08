const express = require('express')
const cors = require('cors')
// const logger = require('morgan')

const AppRouter = require('./routes/AppRouter')
const { request } = require('http')
const { response } = require('express')

const PORT = process.env.Port || 8000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => res.json({message: 'Server works'}))
app.use('/api', AppRouter)

//proxy

// app.use((req, res, next)=>{
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// })
// app.get('/v1/cards', (req,res)=>{
//     request(
//         { url:`https://api.magicthegathering.io/v1/cards`},
//         (error, response, body)=>{
//             if (error|| response.statusCode!==200){
//                 return res.status(500).json({type:'error', message: err.message});
//             }

//             res.json(JSON.parse(body));
//         }
//     )
// })

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))