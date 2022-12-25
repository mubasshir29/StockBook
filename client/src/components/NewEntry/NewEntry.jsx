import React from 'react'
import './NewEntry.css'
import { ListOfType } from '../../Data/ListOfType'
import {useState, useEffect} from 'react'
import {getFormData, submitNewEntry} from './../../utils/api.js'
import {storage} from './../../utils/firebase.js'
import {ref, uploadBytes, getDownloadURL, listAll} from 'firebase/storage'
import {v4} from 'uuid'


function NewEntry() {
  const [AssetCategory,setAssetCategory] = useState(null)
  const [AssetType,setAssetType] = useState(null)
  const [AssetVendors,setAssetVendors] = useState(null)
  const [AssetModels,setAssetModels] = useState(null)
  const [Projects,setProjects] =useState(null)
  const [Persons,setPersons] = useState(null)

  const [selectedCategory,setSelectedCategory] = useState(null)
  const [selectedType,setSelectedType] = useState(null)
  const [selectedVendor,setSelectedVendor] = useState(null)
  const [selectedModel,setSelectedModel] = useState(null)
  const [selectedProject,setSelectedProject] =useState(null)
  const [selectedPerson,setSelectedPerson] = useState(null)

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
    //fetchData()
    fetchData()
  },[])

  const [iconFile, setIconFile] = useState(null)
  const [docFile,setDocFile] = useState(null)

  const [assetTypeList,setAssetTypeList] = useState(null)
  const [assetVendorList,setAssetVendorList] = useState(null)
  const [assetModelList,setAssetModelList] = useState(null)


  const [newItem,setNewItem] = useState({
    category:null,
    type:null,
    vendor:null,
    model:null,
    serial_no:'',
    description:'',
    project:null,
    date:'',
    person:null,
    icon:'',
    attach:'',
    comments:'',
    status:'In-Stock'
})

  useEffect(()=>{
  },[])


  const handleOnChange = (e)=>{
    switch(e.target.name){
      case 'category': {
                    setSelectedCategory(e.target.value)
                    //setAssetTypeList(AssetType.filter(entry => entry.category === selectedCategory))
                    setNewItem({...newItem, [e.target.name]:e.target.value})
                    break;
                  }
      case 'type': {
                    setSelectedType(e.target.value)
                    setNewItem({...newItem, [e.target.name]:e.target.value})
                    break;
                  }    
      case 'vendor':{
                    setSelectedVendor(e.target.value);
                    setNewItem({...newItem, [e.target.name]:e.target.value})
        break;
      }
      case 'model':{
                    setSelectedModel(e.target.value);
                    setNewItem({...newItem, [e.target.name]:e.target.value})
                    break;
      }
      default: {
        setNewItem({...newItem, [e.target.name]:e.target.value})
      }
    }    
  }

  const handleOnFileChange = (event)=>{
    const input = event.target.name;
    const inputFile = event.target.files[0]

    if(inputFile == null){
      return;
    }

    switch(input){
      case 'icon':{
        console.log("icon file selected")
        const iconRef = ref(storage, `/AssetIcons/${inputFile.name + v4()}`);
        uploadBytes(iconRef,inputFile).then((snapshot)=>{
          getDownloadURL(snapshot.ref).then(url => setNewItem({...newItem, icon:url}))
          console.log(newItem)
        })
        break;
      }
      case 'attach':{
        const docRef = ref(storage, `/AssetDocs/${inputFile.name + v4()}`);
        uploadBytes(docRef,inputFile).then((snapshot)=>{
          getDownloadURL(snapshot.ref).then(url => setNewItem({...newItem,attach:url}))
          console.log(newItem)
        })
        break;
      }
    }
  }

  const handleSaveButton = ()=>{
    submitNewEntry(newItem)
  }
  return (
    <div>
      <h1>Add asset</h1>
      <div className='form-container'>
          <form className='additem-form'>
            <div className='form-element name-container'>
                <label htmlFor='name'>Name</label>
                <input name='name' onChange={(e)=>handleOnChange(e)} id='name' type='text'></input>
            </div>
            <div className='form-element category-container'>
            <label htmlFor='category'>Category</label>
            <select name='category' onChange={(e) =>handleOnChange(e)} id='category' defaultValue={'DEFAULT'}>
              <option value='DEFAULT'> -- asset category -- </option>
              {AssetCategory && AssetCategory.map((entry,index) => <option key={index}>{entry.category}</option>)}
            </select>
            </div>

            <div className='form-element type-container'>
            <label htmlFor='type'>Type</label>
            <select name='type' onChange={(e) =>handleOnChange(e)} id='type' defaultValue={'DEFAULT'}>
            <option value='DEFAULT'> -- asset type -- </option>
              {AssetType && AssetType.map((entry,index) => {
                if(entry.category === selectedCategory)
                return <option key={index}>{entry.type}</option>
              })}
            </select>
            </div>

            <div className='form-element vendor-container'>
            <label htmlFor='vendor'>Vendor</label>
            <select name='vendor' onChange={(e) =>handleOnChange(e)} id='vendor' defaultValue={'DEFAULT'}>
            <option value='DEFAULT'> -- asset vendor -- </option>
            {AssetVendors && AssetVendors.map((entry,index) =>{
                if(entry.category === selectedCategory && entry.type === selectedType){
                 return <option key={index}>{entry.vendor}</option>
                }
              }
              )}
            </select>
            </div>

            <div className='form-element model-container'>
            <label htmlFor='model'>Model</label>
            <select name='model' onChange={(e) =>handleOnChange(e)} id='model' defaultValue={'DEFAULT'}>
            <option value='DEFAULT'> -- asset model -- </option>
            {AssetModels && AssetModels.map((entry,index) =>{
                if(entry.category === selectedCategory && entry.type === selectedType && entry.vendor === selectedVendor){
                return <option key={index}>{entry.model}</option>
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
            <select name='project' onChange={(e)=>handleOnChange(e)} id='project' defaultValue={'DEFAULT'}>
            <option value='DEFAULT'> -- project name -- </option>
              {Projects && Projects.map((entry,index) => {
                if(entry.category === selectedCategory)
                return <option key={index}>{entry.project}</option>
              })}
              
            </select>
            </div>

            <div className='form-element date-container'>
                <label htmlFor='date'>Date</label>
                <input name='date' type='date' id='date' onChange={(e)=>handleOnChange(e)}></input>
            </div>

            
            <div className='form-element added-by-container'>
            <label htmlFor='person'>Added by</label>
            <select name='person' id='added-by' onChange={(e)=>handleOnChange(e)} defaultValue={'DEFAULT'}>
            <option value='DEFAULT'> -- person -- </option>
              {Persons && Persons.map((entry,index) => {
                if(entry.category === selectedCategory)
                return <option key={index}>{entry.person}</option>
              })}
            </select>
            </div>

            <div className='form-element attachment-container'>
              <label htmlFor='icon'>Add Image</label>
                <input name='icon' type='file' id='icon' onChange={(e)=>handleOnFileChange(e)}></input>
            </div>

            <div className='form-element attachment-container'>
              <label htmlFor='attach'>Attach file</label>
                <input name='attach' type='file' id='attach' onChange={(e)=>handleOnFileChange(e)}></input>
            </div>

            
            <div className='form-element comments-container'>
                <label htmlFor='comments'>Comments</label>
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