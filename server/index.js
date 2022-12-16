import express from 'express'
import dotenv from 'dotenv'
import router from './routes/pageRoutes.js'


const app = express()
app.use(express.json())
app.use('/', router)
dotenv.config()

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log("Server is running on",PORT)
})