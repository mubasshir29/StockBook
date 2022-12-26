import React, { createContext, useEffect,useState } from 'react'
import axios from 'axios'
import {getFormData} from './api.js'

const dataContext = createContext()

function DataProvider(props) {
    const [AssetCategory,setAssetCategory] = useState(null)
    const [AssetType,setAssetType] = useState(null)
    const [AssetVendors,setAssetVendors] = useState(null)
    const [AssetModels,setAssetModels] = useState(null)
    const [Projects,setProjects] =useState(null)
    const [Persons,setPersons] = useState(null)

    const fetchData = async ()=>{
        const [categories, types, vendors, models,persons,projects] = await getFormData();
        setAssetCategory(categories)
        setAssetType(types)
        setAssetVendors(vendors)
        setAssetModels(models)
        setProjects(projects)
        setPersons(persons)
      }
    useEffect(()=>{
        fetchData()
        setTimeout(()=>{
            console.log("Waiting for data to fetch")
        },2000)
    },[])
  return (
    <dataContext.Provider value={{AssetCategory, AssetType, AssetVendors, AssetModels,Projects,Persons}}>
        {props.children}
    </dataContext.Provider>
  )
}

export {dataContext, DataProvider}