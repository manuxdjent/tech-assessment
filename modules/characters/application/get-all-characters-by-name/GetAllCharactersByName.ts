import { CharacterRepository, GetAllCharacterParams } from "../../domain/repositories/CharacterRepository"
import { getAllCharacters } from "../get-all/GetAllCharacters"
import { Character } from "../../domain/models/Character"

export const getAllCharactersByName = async (repository: CharacterRepository, query: string): Promise<Character[]> => {
    const params: GetAllCharacterParams = {
      limit: 50
    }
    if (query) {
      params.name = query
    }
    return getAllCharacters(repository, params)
  }