import { Comic } from '../../domain/models/Comic'
import { CharacterRepository, GetAllComicsByCharacterIdParams } from '../../domain/repositories/CharacterRepository'

export function getAllComicsByCharacterId(
    repository: CharacterRepository,
    params: GetAllComicsByCharacterIdParams
): Promise<Comic[]> {
    return repository.getAllComicsByCharacterId(params)
}