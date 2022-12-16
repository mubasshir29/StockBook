import AssetCategory from "../SampleData/AssetCategory"
import AssetType from "../SampleData/AssetType"
import AssetVendors from "../SampleData/AssetVendors"
import AssetModels from "../SampleData/AssetModels"
import Persons from "../SampleData/Persons";
import Projects from "../SampleData/Projects";

export const getFormData = () =>{
    return({AssetCategory, AssetType, AssetVendors, AssetModels,Persons,Projects})
}

export const submitNewEntry = (newEntry)=>{
    console.log(newEntry)
}