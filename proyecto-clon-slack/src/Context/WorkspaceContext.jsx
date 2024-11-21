import { createContext } from "react";

export const WorkspaceContext = createContext()

export const WorkspaceContextProvider = ({children}) => {

    let valor = 'Pepe'
    return (
        <WorkspaceContext.Provider value={ 
            {
                valor: valor,
                numero_favorito: 8
            }
        }>
            {children}
        </WorkspaceContext.Provider>
    )
}