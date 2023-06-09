import { FC, useReducer } from "react";
import { UIContext, UiReducer } from './'

export interface UiState{
    isMenuOpen: boolean;
}

const UI_INITIAL_STATE: UiState = {
    isMenuOpen: false
}

interface Props{
    children: React.ReactNode;
}

export const UiProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(UiReducer, UI_INITIAL_STATE)

    const toggleSideMenu = () => {
        dispatch({
            type: '[UI] - ToggleMenu'
        })
    }
    return(
        <UIContext.Provider value={{
            ...state,
            toggleSideMenu
        }}>
            { children }
        </UIContext.Provider>
    )








}
