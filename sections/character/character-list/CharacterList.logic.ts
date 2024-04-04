import { getAllCharacters } from '@/modules/characters/application/get-all/GetAllCharacters'
import { Character } from '@/modules/characters/domain/Character'
import { CharacterDataResponse } from '@/modules/characters/domain/CharacterDataResponse'
import { GetAllCharacterParams } from '@/modules/characters/domain/CharacterRepository'

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

export const getAllCharactersByName = async (query: string): Promise<CharacterDataResponse> => {
    const params: GetAllCharacterParams = {
      limit: 50
    }
    if (query) {
      params.name = query
    }
    return getAllCharacters(params)
  }