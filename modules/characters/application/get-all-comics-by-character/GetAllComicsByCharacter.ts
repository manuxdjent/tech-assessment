import { ComicDataResponse } from '../../domain/CharacterDataResponse'
import { GetAllComicsByCharacterIdParams } from '../../domain/CharacterRepository'
import { apiCharacterRepository } from '../../infrastructure/repositories/ApiCharacterRepository'

export function getAllComicsByCharacterId(
    params: GetAllComicsByCharacterIdParams
): Promise<ComicDataResponse> {
    return apiCharacterRepository().getAllComicsByCharacterId(params)
}