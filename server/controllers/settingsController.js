import {categoryModel,typeModel,vendorModel,modelModel,projectModel,personModel} from './../models/SettingsModel.js'

export const addCategory = (req,res) => {
    console.log(req.body)
    try{
        const newEntry = new categoryModel(req.body)
        newEntry.save()
        res.status(200).json({msg:"Category added successfully"})
    }
    catch(error){
        res.status(400).json({error: `Unable to add category:${error.message}`})
    }
    
}

export const addType = (req,res) => {
    try{
        const newEntry = new typeModel(req.body)
        newEntry.save()
        res.status(200).json({msg:"Type added successfully"})
    }
    catch(error){
        res.status(400).json({error: `Unable to add type:${error.message}`})
    }
}
export const addVendor = (req,res) => {
    try{
        const newEntry = new vendorModel(req.body)
        newEntry.save()
        res.status(200).json({msg:"Vendor added successfully"})
    }
    catch(error){
        res.status(400).json({error: `Unable to add vendor:${error.message}`})
    }
}

export const addModel = (req,res) => {
    try{
        const newEntry = new modelModel(req.body)
        newEntry.save()
        res.status(200).json({msg:"Model added successfully"})
    }
    catch(error){
        res.status(400).json({error: `Unable to add model:${error.message}`})
    }
}
export const addProject = (req,res) => {
    try{
        const newEntry = new projectModel(req.body)
        newEntry.save()
        res.status(200).json({msg:"Project added successfully"})
    }
    catch(error){
        res.status(400).json({error: `Unable to add project:${error.message}`})
    }
}

export const addPerson = (req,res) => {
    try{
        const newEntry = new personModel(req.body)
        newEntry.save()
        res.status(200).json({msg:"Person added successfully"})
    }
    catch(error){
        res.status(400).json({error: `Unable to add person:${error.message}`})
    }
}

export const getCategories = async (req,res) =>{
    try{
        const categories = await categoryModel.find()
        console.log(categories)
        res.status(200).json(categories)
    }
    catch(error){
        console.log(error)
    }
}
export const getTypes = async (req,res) =>{
    try{
        const categories = await typeModel.find()
        res.status(200).json(categories)
    }
    catch(error){
        console.log(error)
    }
}
export const getvendors = async (req,res) =>{
    try{
        const categories = await vendorModel.find()
        res.status(200).json(categories)
    }
    catch(error){
        console.log(error)
    }
}
export const getModels = async (req,res) =>{
    try{
        const categories = await modelModel.find()
        res.status(200).json(categories)
    }
    catch(error){
        console.log(error)
    }
}
export const getProjects = async (req,res) =>{
    try{
        const categories = await projectModel.find()
        res.status(200).json(categories)
    }
    catch(error){
        console.log(error)
    }
}
export const getPersons = async (req,res) =>{
    try{
        const categories = await personModel.find()
        res.status(200).json(categories)
    }
    catch(error){
        console.log(error)
    }
}