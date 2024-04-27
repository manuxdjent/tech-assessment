import { CharacterRepository, GetCharacterByIdParams } from '../../domain/repositories/CharacterRepository'
import { Character } from '../../domain/models/Character'

export function getCharacterById(
    repository: CharacterRepository,
    params: GetCharacterByIdParams
): Promise<Character> {
    return repository.get(params)
}