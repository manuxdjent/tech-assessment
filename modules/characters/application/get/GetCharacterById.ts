import { CharacterDataResponse } from '../../domain/CharacterDataResponse'
import { CharacterRepository, GetCharacterByIdParams } from '../../domain/CharacterRepository'

export function getCharacterById(
    repository: CharacterRepository,
    params: GetCharacterByIdParams
): Promise<CharacterDataResponse> {
    return repository.get(params)
}