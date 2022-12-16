import AssetCategory from "./SampleData/AssetCategory";

const printCategory = (AssetCategory)=>{
    AssetCategory.map(entry => {
        console.log(entry.name)
    })
}

printCategory();