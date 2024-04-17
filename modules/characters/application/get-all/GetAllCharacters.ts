import { CharacterDataResponse } from '@/modules/characters/domain/CharacterDataResponse'
import { CharacterRepository, GetAllCharacterParams } from '@/modules/characters/domain/CharacterRepository'

export function getAllCharacters(
    repository: CharacterRepository,
    params: GetAllCharacterParams
): Promise<CharacterDataResponse> {
    return repository.getAll(params)
}