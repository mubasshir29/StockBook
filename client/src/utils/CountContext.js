import {React,createContext, useState } from "react";
import AllData from "../SampleData/AllData";
import AssetModels from "../SampleData/AssetModels";

const CountContext = createContext();

const CountContextProvider = ({children}) =>{
    const [myCategory, setMyCategory] = useState('')
    const stockCountList = []
    let count =0;

    AssetModels.forEach(model => {
        AllData.forEach(entry => {
            if(entry.model === model.name){
                count++;
            }
        }
        )
        stockCountList.push({"name": model.name, "count":count, "category": model.category})
        count=0
    })


    return (
        <CountContext.Provider value={stockCountList}>
            {children}
        </CountContext.Provider>
    )
}

export {CountContext, CountContextProvider}