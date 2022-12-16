import { createContext } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({children})=>{
    const sidebarVisible = true;
    return(
        <SidebarContext.Provider value={sidebarVisible}>{children}</SidebarContext.Provider>
    )
}

export {SidebarContext, SidebarProvider}
