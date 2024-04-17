import { CharacterDataResponse } from "../../domain/CharacterDataResponse"
import { CharacterRepository, GetAllCharacterParams } from "../../domain/CharacterRepository"
import { getAllCharacters } from "../get-all/GetAllCharacters"

export const getAllCharactersByName = async (repository: CharacterRepository, query: string): Promise<CharacterDataResponse> => {
    const params: GetAllCharacterParams = {
      limit: 50
    }
    if (query) {
      params.name = query
    }
    return getAllCharacters(repository, params)
  }