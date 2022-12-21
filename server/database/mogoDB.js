import mongoose from 'mongoose'

const Connection = async (username,password) => {
    const db_url = `mongodb://${username}:${password}@ac-j6jeorx-shard-00-00.wexyfxp.mongodb.net:27017,ac-j6jeorx-shard-00-01.wexyfxp.mongodb.net:27017,ac-j6jeorx-shard-00-02.wexyfxp.mongodb.net:27017/?ssl=true&replicaSet=atlas-111qki-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(db_url, {useNewUrlParser:true, useUnifiedTopology: true})
        console.log("Database Connected")
    }
    catch(error){
        console.log("Error in connecting database")
    }
}

export default Connection;