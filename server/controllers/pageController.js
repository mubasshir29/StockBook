import assetModel from '../models/AssetModel.js'

export const getAllAssets = async (req,res)=>{
    try{
        const allAssets = await assetModel.find()
        res.status(200).json(allAssets)
    }
    catch(error){
        console.log(error)
    }

}

export const addNewEntry = async (req,res)=>{
    console.log(req.body)
    try{
        const newItem = new assetModel(req.body)
        await newItem.save()
        console.log("Added to database successfully")
        res.status(200).json({"msg":"Entry added successfully"})
    }

    catch(error){
        console.log("Error",error.message)
    }
}