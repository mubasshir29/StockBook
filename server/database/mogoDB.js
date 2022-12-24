import mongoose from 'mongoose'

const Connection = async (username,password) => {
    const db_url = `mongodb+srv://${username}:${password}@crudapp.wexyfxp.mongodb.net/StockBook?retryWrites=true&w=majority`
    try{
        await mongoose.connect(db_url, {useNewUrlParser:true, useUnifiedTopology: true})
        console.log("Database Connected")
    }
    catch(error){
        console.log("Error in connecting database")
    }
}

export default Connection;