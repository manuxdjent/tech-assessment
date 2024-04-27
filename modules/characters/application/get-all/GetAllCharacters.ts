import { CharacterRepository, GetAllCharacterParams } from '@/modules/characters/domain/repositories/CharacterRepository'
import { Character } from '../../domain/models/Character'

export function getAllCharacters(
    repository: CharacterRepository,
    params: GetAllCharacterParams
): Promise<Character[]> {
    return repository.getAll(params)
}