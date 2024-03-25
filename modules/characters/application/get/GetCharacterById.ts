import { CharacterDataResponse } from '../../domain/CharacterDataResponse'
import { GetCharacterByIdParams } from '../../domain/CharacterRepository'
import { apiCharacterRepository } from '../../infrastructure/ApiCharacterRepository'

export function getCharacterById(
    params: GetCharacterByIdParams
): Promise<CharacterDataResponse> {
    return apiCharacterRepository().get(params)
}