import { Character } from '@/modules/characters/domain/Character'

export const getFilteredCharacterList = (
    isfavoriteCharactersFilteringActive: boolean,
    characterList: Character[],
    favoriteCharacterIds: string[]
    ): Character[] => isfavoriteCharactersFilteringActive
? characterList.filter((character) =>
    favoriteCharacterIds.some(
      (favoriteCharacterId) => favoriteCharacterId === character.id
    )
  )
: characterList

export const getTotalLabel = (filteredCharacterList: Character[]) => `${filteredCharacterList.length} RESULTS`