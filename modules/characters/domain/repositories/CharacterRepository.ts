import { Character } from '../models/Character'
import { Comic } from '../models/Comic'

export interface GetAllCharacterParams {
    name?: string
    limit?: number
}

export interface GetCharacterByIdParams {
    characterId: string
}

export interface GetAllComicsByCharacterIdParams {
    characterId: string
}

export interface CharacterRepository {
    get: (params: GetCharacterByIdParams) => Promise<Character>
    getAll: (params: GetAllCharacterParams) => Promise<Character[]>
    getAllComicsByCharacterId: (params: GetAllComicsByCharacterIdParams) => Promise<Comic[]>
}