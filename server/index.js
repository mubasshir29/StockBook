import express from 'express'
import dotenv from 'dotenv'
import SettingsRouter from './routes/settingsRoutes.js'
import Pagerouter from './routes/pageRoutes.js'
import Connection from './database/mogoDB.js'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())
app.use('/settings', SettingsRouter)
app.use('/', Pagerouter)
app.use(cors())
dotenv.config()
Connection(process.env.DB_USER, process.env.DB_PASSWORD);

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log("Server is running on",PORT)
})