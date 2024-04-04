import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface AppContextType {
    favoriteCharacterIds: string[]
    setFavoriteCharacterIds: Dispatch<SetStateAction<string[]>> | (() => {})
    isfavoriteCharactersFilteringActive: boolean
    setIsfavoriteCharactersFilteringActive: Dispatch<SetStateAction<boolean>> | (() => {})
}

const AppContext = createContext<AppContextType>({
    favoriteCharacterIds: [],
    setFavoriteCharacterIds: () => {},
    isfavoriteCharactersFilteringActive: false,
    setIsfavoriteCharactersFilteringActive: () => {}
})

export function useAppContext(): AppContextType {
    return useContext(AppContext)
}

export default AppContext;
