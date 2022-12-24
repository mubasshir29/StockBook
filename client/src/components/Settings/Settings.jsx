import React, { useEffect } from 'react'
import './Settings.css'
import {useState} from 'react'
import AssetCategory from '../../SampleData/AssetCategory'
import AssetType from '../../SampleData/AssetType'
import AssetModels from '../../SampleData/AssetModels'
import AssetVendors from '../../SampleData/AssetVendors'
import { addNewCategory,addNewType, addNewVendor, addNewModel, addNewProject, addNewPerson } from '../../utils/api'

function Settings() {
    useEffect(()=>{

    },[AssetCategory,AssetType,AssetModels,AssetVendors])

    const [categorySelected,setCategorySelected] = useState(true)
    const [typeSelected,setTypeSelected] = useState(false)
    const [vendorSelected,setVendorSelected] = useState(false)
    const [modelSelected,setModelSelected] = useState(false)
    const [activeLink,setActiveLink] = useState('category')

    const [newEntry,setNewEntry] = useState({})

    const handleCategoryClick = (e)=>{
        setActiveLink('category')
        setCategorySelected(true)
        setTypeSelected(false)
        setVendorSelected(false)
        setModelSelected(false)
    }
    const handleTypeClick = (e)=>{
        setActiveLink('type')
        setCategorySelected(true)
        setTypeSelected(true)
        setVendorSelected(false)
        setModelSelected(false)
    }
    const handleVendorClick = (e)=>{
        setActiveLink('vendor')
        setCategorySelected(true)
        setTypeSelected(true)
        setVendorSelected(true)
        setModelSelected(false)
    }
    const handleModelClick = (e)=>{
        setActiveLink('model')
        setCategorySelected(true)
        setTypeSelected(true)
        setVendorSelected(true)
        setModelSelected(true)
    }



    
    const handleInputChange = (e) => {
        setNewEntry({...newEntry,[e.target.name]: e.target.value})
        console.log(newEntry)
    }
    const handleSaveButton = (e)=>{
        e.preventDefault();
        if(modelSelected && vendorSelected && typeSelected && categorySelected){
            addNewModel(newEntry)
        }
        else  if(vendorSelected && typeSelected && categorySelected){
            addNewVendor(newEntry)
        }
        else  if(typeSelected && categorySelected){
            addNewType(newEntry)
        }
        else if(categorySelected){
            AssetCategory.push(newEntry)
            console.log("Category Added")
            console.log(AssetCategory)
            addNewCategory(newEntry)
        }
        document.querySelectorAll('input').values ='';
    }

  return (
    <div>
    <div className='settings-container'>
        <div className='left-panel'>
            <ul className='left-panel-tabs'>
                <li name='category' className={ activeLink==='category'? 'selected': ''} onClick={e=>handleCategoryClick(e)}>New Category</li>
                <li name='type' className={ activeLink==='type'? 'selected': ''} onClick={e=>handleTypeClick(e)}>New Type</li>
                <li name='vendor' className={ activeLink==='vendor'? 'selected': ''} onClick={e=>handleVendorClick(e)}>New Vendor</li>
                <li name='model' className={ activeLink==='model'? 'selected': ''} onClick={e=>handleModelClick(e)}>New Model</li>
                <li name='model' className={ activeLink==='model'? 'selected': ''} onClick={e=>handleModelClick(e)}>New Project</li>
                <li name='model' className={ activeLink==='model'? 'selected': ''} onClick={e=>handleModelClick(e)}>New Person</li>
            </ul>
        </div>
        <div className='right-panel'>
            <div className='right-panel-upper'>
                {categorySelected && <div className='category-container'>
                    <label>Category</label><br/>
                    <input name='category' onChange={(e)=>handleInputChange(e)} type={'text'}></input>
                </div>}
                {typeSelected && <div className='type-container'>
                    <label>Type</label><br/>
                    <input name='type' onChange={(e)=>handleInputChange(e)} type={'text'}></input>
                </div>}
                {vendorSelected && <div className='vendor-container'>
                    <label>Vendor</label><br/>
                    <input name='vendor' onChange={(e)=>handleInputChange(e)} type={'text'}></input>
                </div>}
                {modelSelected && <div className='model-container'>
                    <label>Model</label><br/>
                    <input name='model' onChange={(e)=>handleInputChange(e)} type={'text'}></input>
                </div>}
            </div>
        </div>
    </div>
    <button onClick={(e)=>handleSaveButton(e)} className='save-btn'>Save</button>
        <div className='show-lists'>
            {activeLink==='category' && <div id='show-categories'>
                <h2>Categories</h2>
                <table className='tab-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AssetCategory.map((entry,index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{entry.name}</td>
                                <td>
                                    <button>E</button>
                                    <button>D</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
            {activeLink==='type' && <div id='show-type'>
                <h2>Asset Types</h2>
                <table className='tab-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AssetType.map((entry,index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{entry.name}</td>
                                <td>{entry.category}</td>
                                <td>
                                    <button>E</button>
                                    <button>D</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>         
            </div>}
            {activeLink==='vendor' && <div id='show-vendor'>
                <h2>Vendors</h2>
                <table className='tab-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AssetVendors.map((entry,index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{entry.name}</td>
                                <td>{entry.category}</td>
                                <td>
                                    <button>E</button>
                                    <button>D</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
            {activeLink==='model' && <div id='show-model'>
                <h2>Models</h2>
                <table className='tab-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AssetModels.map((entry,index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{entry.name}</td>
                                <td>{entry.category}</td>
                                <td>
                                    <button>E</button>
                                    <button>D</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
        </div>
    </div>
  )
}

export default Settings