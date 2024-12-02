import { createContext, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import workspaces from '../Data/WorkspaceData'

const WorkspaceContext = createContext()

console.log("workspaces",workspaces)

// eslint-disable-next-line react/prop-types
export const WorkspaceContextProvider = ({children}) => {

    //metodo para agregar un nuevo mensaje
    const addNewMessage = (workspace_id, text) => {
        const new_message = {
            author: "YO",
            text: text,
            id: uuidv4(),
            time: new Date().toLocaleString(),
        };
        console.log(new_message);
        setWorkspaceState((prevWorkspaceState) => {
            const workspace_found = prevWorkspaceState.find(
            (workspace) => workspace.id === workspace_id
            );
            workspace_found.messages.push(new_message);
            return prevWorkspaceState;
        });
    };
    //metodo para extraer un id
    const getWorkspaceById = (workspace_id) => {
        return workspaceState.find(
            (workspace) => workspace.id === Number(workspace_id)
        );
    };

    const [workspaceState, setWorkspaceState] = useState(workspaces)

    return (
        <WorkspaceContext.Provider
            value={{
            workspaceState: workspaceState,
            getWorkspaceById: getWorkspaceById,
            addNewMessage: addNewMessage,
            }}
        >
            {children}
        </WorkspaceContext.Provider>
    );
}

export {WorkspaceContext}