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