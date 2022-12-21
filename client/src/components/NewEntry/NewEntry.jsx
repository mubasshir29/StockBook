import React from 'react'
import './NewEntry.css'
import { ListOfType } from '../../Data/ListOfType'
import {useState, useEffect} from 'react'
import {getFormData, submitNewEntry} from './../../utils/api.js'

const {AssetCategory, AssetType, AssetVendors, AssetModels,Persons,Projects} = getFormData();

function NewEntry() {
  const [categoryOptoins, setCategoryOptoins] = useState([])
  const [assetTypeOptoins, setAssetTypeOptoins] = useState([])
  const [vendorOptoins, setVendorOptoins] = useState([])
  const [modelOptoins, setModelOptoins] = useState([])
  const [personsOptions,setPersonOptions] = useState([])
  const [projectsOptions,setProjectsOptions] = useState([])

  const [assetCategory,setAssetCategory] = useState(AssetCategory[0].name)
  const [assetType,setAssetType] = useState((AssetType.find(entry => entry.category === assetCategory)).name)
  const [assetVendor,setAssetVendor] = useState((AssetVendors.find(entry => entry.category === assetCategory)).name)
  const [assetModel,setAssetModel] = useState((AssetModels.find(entry => entry.category === assetCategory)).name)
  const [assetProject,setAssetProject] =useState((Projects.find(entry => entry.category === assetCategory)).name)
  const [assetPerson,setAssetPerson] = useState((Persons.find(entry => entry.category === assetCategory)).name)

  const [newItem,setNewItem] = useState({
    category:assetCategory,
    type:assetType,
    vendor:assetVendor,
    model:assetModel,
    serial_no:'',
    description:'',
    project:assetProject,
    date:'',
    person:assetPerson,
    icon:'',
    attach:'',
    comments:'',
    status:'In-Stock'
})

  useEffect(()=>{
    setCategoryOptoins(AssetCategory)
    setAssetTypeOptoins(AssetType)
    setVendorOptoins(AssetVendors)
    setModelOptoins(AssetModels)
    setPersonOptions(Persons)
    setProjectsOptions(Projects)
  },[assetCategory])

  // const handleCategoryChange = (e)=>{
  //   setCategory(e.target.value)
  //   setNewItem({...newItem, [e.target.name]:e.target.value})
  // }
  // const handleTypeChange = (e) =>{
  //   setAssetType(e.target.value)
  //   setNewItem({...newItem, [e.target.name]:e.target.value})
  // }
  // const handleVendorChange = (e) =>{
  //   setVendor(e.target.value)
  //   setNewItem({...newItem, [e.target.name]:e.target.value})
  // }
  // const handleModelChange = (e) =>{
  //   setModel(e.target.value)
  //   setNewItem({...newItem, [e.target.name]:e.target.value})
  // }

  const handleOnChange = (e)=>{
    switch(e.target.name){
      case 'category': {
                    setAssetCategory(e.target.value)
                    setNewItem({...newItem, [e.target.name]:e.target.value})
                    break;
                  }
      case 'type': {
                    setAssetType(e.target.value)
                    setNewItem({...newItem, [e.target.name]:e.target.value})
                    break;
                  }    
      case 'vendor':{
        setAssetVendor(e.target.value);
        setNewItem({...newItem, [e.target.name]:e.target.value})
        break;
      }
      case 'model':{
        setAssetModel(e.target.value);
        setNewItem({...newItem, [e.target.name]:e.target.value})
        break;
      }
      default: {
        setNewItem({...newItem, [e.target.name]:e.target.value})
      }
    }

    
  }

  const handleSaveButton = ()=>{
    submitNewEntry(newItem)
  }
  return (
    <div>
      <h1>Add Stock</h1>
      <div className='form-container'>
          <form className='additem-form'>

            
            <div className='form-element category-container'>
            <label htmlFor='category'>Category</label>
            <select name='category' onChange={(e) =>handleOnChange(e)} id='category'>
              {categoryOptoins.map(entry => <option>{entry.name}</option>)}
            </select>
            </div>

            <div className='form-element type-container'>
            <label htmlFor='type'>Type</label>
            <select name='type' onChange={(e) =>handleOnChange(e)} id='type'>
              {assetTypeOptoins.map(entry => {
                if(entry.category === assetCategory)
                return <option>{entry.name}</option>
              })}
            </select>
            </div>

            <div className='form-element vendor-container'>
            <label htmlFor='vendor'>Vendor</label>
            <select name='vendor' onChange={(e) =>handleOnChange(e)} id='vendor'>
            {vendorOptoins.map(entry =>{
                if(entry.category === assetCategory && entry.type === assetType){
                 return <option>{entry.name}</option>
                }
              }
              )}
            </select>
            </div>

            <div className='form-element model-container'>
            <label htmlFor='model'>Model</label>
            <select name='model' onChange={(e) =>handleOnChange(e)} id='model'>
            {modelOptoins.map(entry =>{
                if(entry.category === assetCategory && entry.type === assetType && entry.vendor === assetVendor){
                return <option>{entry.name}</option>
                }
              }
              )}
            </select>
            </div>

            <div className='form-element serial-number-container'>
                <label htmlFor='serial_no'>Serial No</label>
                <input name='serial_no' onChange={(e)=>handleOnChange(e)} id='serial_no' type='text'></input>
            </div>

            <div className='form-element description-container'>
                <label htmlFor='description-box'>Description</label>
                <input name='description' onChange={(e)=>handleOnChange(e)} id='description-box' type='text' placeholder='Description'></input>
            </div>

            <div className='form-element project-container'>
            <label htmlFor='project'>Project</label>
            <select name='project' onChange={(e)=>handleOnChange(e)} id='project'>
              {projectsOptions.map(entry => {
                if(entry.category === assetCategory)
                return <option>{entry.name}</option>
              })}
              
            </select>
            </div>

            <div className='form-element date-container'>
                <label htmlFor='date'>Date</label>
                <input name='date' type='date' id='date' onChange={(e)=>handleOnChange(e)}></input>
            </div>

            
            <div className='form-element added-by-container'>
            <label for='person'>Added by</label>
            <select name='person' id='added-by' onChange={(e)=>handleOnChange(e)}>
              <option>Person A</option>
              <option>Person B</option>
            </select>
            </div>

            <div className='form-element attachment-container'>
              <label for='icon'>Add Image</label>
                <input name='icon' type='file' id='icon' onChange={(e)=>handleOnChange(e)}></input>
            </div>

            <div className='form-element attachment-container'>
              <label for='attach'>Attach file</label>
                <input name='attach' type='file' id='attach' onChange={(e)=>handleOnChange(e)}></input>
            </div>

            
            <div className='form-element comments-container'>
                <label for='comments'>Comments</label>
                <input name='comments' id='comments' type='text' onChange={(e)=>handleOnChange(e)} placeholder='Add comments'></input>
            </div>

          </form>
      </div>
      <div className='save-cancel-container'>
        <button className='save-cancel-btn cancel-btn'>Cancel</button>
        <button onClick={handleSaveButton} className='save-cancel-btn save-btn'>Save</button>
      </div>
    </div>
  )
}

export default NewEntry