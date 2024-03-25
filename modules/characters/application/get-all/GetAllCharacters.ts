import { CharacterDataResponse } from '@/modules/characters/domain/CharacterDataResponse'
import { GetAllCharacterParams } from '@/modules/characters/domain/CharacterRepository'
import { apiCharacterRepository } from '@/modules/characters/infrastructure/ApiCharacterRepository'

export function getAllCharacters(
    params: GetAllCharacterParams
): Promise<CharacterDataResponse> {
    return apiCharacterRepository().getAll(params)
}