import express from 'express'
import dotenv from 'dotenv'
import router from './routes/pageRoutes.js'
import Connection from './database/mogoDB.js'


const app = express()
app.use(express.json())
app.use('/', router)
dotenv.config()
Connection(process.env.DB_USER, process.env.DB_PASSWORD);

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log("Server is running on",PORT)
})