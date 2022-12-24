import AssetCategory from "../SampleData/AssetCategory"
import AssetType from "../SampleData/AssetType"
import AssetVendors from "../SampleData/AssetVendors"
import AssetModels from "../SampleData/AssetModels"
import Persons from "../SampleData/Persons";
import Projects from "../SampleData/Projects";
import axios from 'axios'

const backend_url = 'http://localhost:8000'

export const getFormData = () =>{
    return({AssetCategory, AssetType, AssetVendors, AssetModels,Persons,Projects})
}

export const submitNewEntry = async (newEntry)=>{
    await axios.post(`${backend_url}/newEntry`,newEntry)
}

export const addNewCategory = async (newCategory) =>{
    await axios.post(`${backend_url}/settings/addCategory`,newCategory)
}
export const addNewType = async (newType) =>{
    await axios.post(`${backend_url}/settings/addType`,newType)
}
export const addNewVendor = async (newVendor) =>{
    await axios.post(`${backend_url}/settings/addVendor`,newVendor)
}
export const addNewModel = async (newModel) =>{
    await axios.post(`${backend_url}/settings/addModel`,newModel)
}
export const addNewProject = async (newProject) =>{
    await axios.post(`${backend_url}/settings/addProject`,newProject)
}
export const addNewPerson = async (newPerson) =>{
    await axios.post(`${backend_url}/settings/addPerson`,newPerson)
}