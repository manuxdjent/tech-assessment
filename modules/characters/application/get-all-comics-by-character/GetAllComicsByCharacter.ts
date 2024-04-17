import { ComicDataResponse } from '../../domain/CharacterDataResponse'
import { CharacterRepository, GetAllComicsByCharacterIdParams } from '../../domain/CharacterRepository'

export function getAllComicsByCharacterId(
    repository: CharacterRepository,
    params: GetAllComicsByCharacterIdParams
): Promise<ComicDataResponse> {
    return repository.getAllComicsByCharacterId(params)
}