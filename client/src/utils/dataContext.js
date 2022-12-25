import React, { createContext, useEffect } from 'react'
import axios from 'axios'
import {getFormData, submitNewEntry} from './../../utils/api.js'

function dataContext(props) {
    const dataContext = createContext()

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
        fetchData();
    },[])
  return (
    <dataContext.Provider value={{AssetCategory,AssetType,AssetVendors,AssetModels,Projects,Persons}}>
        {props.children}
    </dataContext.Provider>
  )
}

export default dataContext